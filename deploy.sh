#!/usr/bin/env bash

# 遇到任何错误立即退出
set -e

echo "=========================================="
echo "🚀 开始本地构建并部署到 GitHub Pages"
echo "=========================================="

# 1. 运行本地构建
echo "📦 正在执行 Astro 本地构建..."
npm run build

# 2. 确保 .nojekyll 文件存在（阻止 GitHub Pages 忽略 _astro 开头的资源目录）
touch dist/.nojekyll

# 3. 获取远程 Git 仓库地址
REMOTE_URL=$(git config --get remote.origin.url || echo "git@github.com:SFBB/sfbb.github.io.git")
echo "🌐 远程仓库: $REMOTE_URL"

# 4. 进入构建输出目录
cd dist

# 初始化临时 git 仓库以推送到部署分支
git init
git checkout -B gh-pages

git add -A

# 提交静态产物（使用 --no-gpg-sign 避免静态部署产物触发签名密码弹窗）
COMMIT_MSG="deploy: site update $(date '+%Y-%m-%d %H:%M:%S')"
git commit --no-gpg-sign -m "$COMMIT_MSG" 2>/dev/null || git commit -m "$COMMIT_MSG"

echo "📤 正在推送构建产物到远程 gh-pages 分支..."
git push -f "$REMOTE_URL" gh-pages

# 5. 清理临时 git 信息
cd ..
rm -rf dist/.git

echo "=========================================="
echo "🎉 部署完成！产物已成功推送至 gh-pages 分支。"
echo "👉 请确保 GitHub 仓库设置 (Settings -> Pages):"
echo "   Source 选择 'Deploy from a branch'，Branch 选择 'gh-pages' / '/ (root)'"
echo "🔗 访问主页: https://sfbb.github.io/"
echo "=========================================="
