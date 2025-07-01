# 🚀 网页部署指南

## 部署选项

### 方法一：GitHub Pages (推荐)

#### 步骤 1: 创建 GitHub 仓库
1. 登录 GitHub
2. 创建新仓库 `global-exchanges-audit-analysis`
3. 设为 Public (GitHub Pages 需要)

#### 步骤 2: 上传文件
```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Global Stock Exchanges Audit Analysis"

# 连接到 GitHub 仓库
git remote add origin https://github.com/YOUR_USERNAME/global-exchanges-audit-analysis.git

# 推送到 GitHub
git push -u origin main
```

#### 步骤 3: 启用 GitHub Pages
1. 进入仓库设置 (Settings)
2. 滚动到 "Pages" 部分
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main"
5. Folder 选择 "/ (root)"
6. 点击 Save

#### 步骤 4: 访问网站
- URL: `https://YOUR_USERNAME.github.io/global-exchanges-audit-analysis`
- 通常需要 5-10 分钟生效

### 方法二：Netlify

#### 步骤 1: 准备文件
1. 将所有文件打包成 ZIP
2. 登录 Netlify.com
3. 拖拽 ZIP 文件到 Netlify

#### 步骤 2: 配置
- Site name: `global-exchanges-audit`
- 自动生成 URL: `https://global-exchanges-audit.netlify.app`

### 方法三：Vercel

#### 步骤 1: 连接 GitHub
1. 登录 Vercel.com
2. 连接 GitHub 账户
3. 导入仓库

#### 步骤 2: 部署
- 自动检测为静态网站
- 自动部署
- URL: `https://global-exchanges-audit.vercel.app`

## 注意事项

### 文件大小限制
- GitHub Pages: 1GB 总大小限制
- 当前项目: ~550MB (在限制内)

### 年度报告文件
- PDF 文件较大 (544MB)
- 建议使用 Git LFS 管理大文件
- 或者不上传 PDF，仅保留链接

### 配置 Git LFS (可选)
```bash
# 安装 Git LFS
git lfs install

# 跟踪 PDF 文件
git lfs track "*.pdf"

# 添加 .gitattributes
git add .gitattributes

# 提交
git commit -m "Add Git LFS for PDF files"
```

## 推荐部署方案

### 选项 A: 完整部署 (包含 PDF)
- 使用 Git LFS 管理 PDF 文件
- 部署到 GitHub Pages
- 用户可直接访问所有报告

### 选项 B: 轻量部署 (不含 PDF)
- 不上传 PDF 文件
- 仅保留链接和界面
- 用户需要自行下载报告

### 选项 C: 混合部署
- 上传少量示例 PDF
- 其他报告提供下载链接
- 平衡功能和文件大小
