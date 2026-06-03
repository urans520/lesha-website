企业官网

## 🚀 快速部署到 GitHub Pages

### 第一步：安装 Git
下载安装：https://git-scm.com/download/win  
安装时一路默认即可。

### 第二步：创建 GitHub 仓库
1. 打开 https://github.com/new
2. Repository name 填写：`lesha-website`
3. 选择 **Public**
4. **不要勾选** "Add a README file"
5. 点击 "Create repository"

### 第三步：推送代码（在本项目目录下打开终端）
```bash
# 初始化 Git
git init

# 添加所有文件
git add .

# 首次提交
git commit -m "首次提交：企业官网"

# 关联远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/lesha-website.git

# 推送
git branch -M main
git push -u origin main
```

### 第四步：启用 GitHub Pages
1. 打开你的 GitHub 仓库页面
2. 点击 **Settings** → **Pages**
3. Source 选择 **Deploy from a branch**
4. Branch 选择 **main**，目录选 **/ (root)**
5. 点击 **Save**
6. 等 1-2 分钟，页面会显示网址：
   `https://YOUR_USERNAME.github.io/lesha-website/`

---

## 💻 本地开发（修改数据）

GitHub Pages 上只能**查看**网站，要**修改数据**需要在本地运行：

```bash
# 启动本地服务器
node server.js
```

然后打开 `http://localhost:8888/admin` 进入后台管理。

修改数据后，推送更新到 GitHub：
```bash
git add data/
git commit -m "更新数据"
git push
```

GitHub Pages 会自动重新部署，1-2 分钟后线上生效。

---

## 📁 项目结构
```
lesha-website/
├── index.html          # 首页
├── products.html       # 产品中心
├── brands.html         # 旗下品牌
├── about.html          # 公司简介
├── news.html           # 新闻资讯
├── contact.html        # 联系我们
├── server.js           # 本地开发服务器
├── init.js             # 数据初始化脚本
├── admin/              # 后台管理系统
├── css/                # 样式文件
├── js/                 # JavaScript
├── data/               # 数据文件（产品/新闻/公司信息）
│   ├── products.json
│   ├── news.json
│   ├── company.json
│   ├── brands.json
│   └── theme.json
└── images/             # 图片资源
    └── uploads/        # 上传的图片
```
