#!/bin/bash

# 全球交易所审计分析网站部署脚本

echo "🚀 Global Stock Exchanges Audit Analysis - Deployment Script"
echo "============================================================"

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the project root directory."
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo "📊 Project files found: ✅"

# 检查文件大小
echo ""
echo "📈 Analyzing project size..."
total_size=$(du -sh . | cut -f1)
pdf_size=$(du -sh reports/ 2>/dev/null | cut -f1 || echo "0B")

echo "📊 Total project size: $total_size"
echo "📄 PDF reports size: $pdf_size"

# 选择部署选项
echo ""
echo "🎯 Deployment Options:"
echo "1. Full deployment (with PDF files) - Recommended for local/private hosting"
echo "2. Light deployment (without PDF files) - Recommended for GitHub Pages"
echo "3. Sample deployment (with sample PDFs only)"

read -p "Choose deployment option (1-3): " deploy_option

case $deploy_option in
    1)
        echo "📦 Preparing full deployment..."
        deployment_type="full"
        ;;
    2)
        echo "📦 Preparing light deployment..."
        deployment_type="light"
        # 创建不包含PDF的版本
        mkdir -p deploy_temp
        cp -r . deploy_temp/
        rm -rf deploy_temp/reports/*.pdf 2>/dev/null
        deployment_type="light"
        ;;
    3)
        echo "📦 Preparing sample deployment..."
        deployment_type="sample"
        # 只保留示例文件
        mkdir -p deploy_temp
        cp -r . deploy_temp/
        find deploy_temp/reports -name "*.pdf" -not -name "*2024*" -delete 2>/dev/null
        ;;
    *)
        echo "❌ Invalid option. Exiting."
        exit 1
        ;;
esac

# Git 初始化和配置
echo ""
echo "🔧 Git Configuration:"

if [ ! -d ".git" ]; then
    echo "📝 Initializing Git repository..."
    git init
    
    # 配置 Git LFS (如果选择完整部署)
    if [ "$deployment_type" = "full" ]; then
        echo "📦 Configuring Git LFS for PDF files..."
        git lfs install
        git lfs track "*.pdf"
        git add .gitattributes
    fi
else
    echo "📝 Git repository already exists"
fi

# 添加文件
echo "📝 Adding files to Git..."
git add .

# 提交
echo "📝 Creating commit..."
commit_message="Deploy: Global Stock Exchanges Audit Analysis ($deployment_type deployment)"
git commit -m "$commit_message"

# 部署说明
echo ""
echo "🎉 Deployment preparation complete!"
echo "============================================================"
echo ""
echo "📋 Next Steps:"
echo ""

if [ "$deployment_type" = "full" ]; then
    echo "🔗 For GitHub Pages with Git LFS:"
    echo "   1. Create a new repository on GitHub"
    echo "   2. git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
    echo "   3. git push -u origin main"
    echo "   4. Enable GitHub Pages in repository settings"
    echo ""
    echo "⚠️  Note: Git LFS may have bandwidth limits on free GitHub accounts"
fi

if [ "$deployment_type" = "light" ]; then
    echo "🔗 For GitHub Pages (recommended):"
    echo "   1. Create a new repository on GitHub"
    echo "   2. git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
    echo "   3. git push -u origin main"
    echo "   4. Enable GitHub Pages in repository settings"
    echo ""
    echo "✅ This deployment is optimized for GitHub Pages free tier"
fi

echo "🌐 Alternative Deployment Options:"
echo "   • Netlify: Drag and drop the project folder"
echo "   • Vercel: Connect your GitHub repository"
echo "   • Firebase Hosting: firebase deploy"
echo ""

echo "📊 Project Features:"
echo "   ✅ Interactive audit analysis dashboard"
echo "   ✅ Annual reports library with 78 reports"
echo "   ✅ Data visualization charts"
echo "   ✅ Responsive design for all devices"
echo "   ✅ Search and filter functionality"
echo ""

echo "🎯 Live Demo URL (after deployment):"
echo "   GitHub Pages: https://YOUR_USERNAME.github.io/REPO_NAME"
echo "   Netlify: https://SITE_NAME.netlify.app"
echo "   Vercel: https://REPO_NAME.vercel.app"
echo ""

echo "🎉 Ready for deployment! Choose your preferred hosting platform."

# 清理临时文件
if [ -d "deploy_temp" ]; then
    rm -rf deploy_temp
fi
