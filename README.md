# blog_mp
个人博客小程序(薛定喵君)

### 前端
- mp文件夹下的代码为小程序前端代码，使用mpvue框架开发
- 接口使用的云函数请求第三方服务器数据

### 后端
- api文件夹下的代码为后端，基于koa框架开发
- 直接读取的本地文件，没有采用数据库存储，是与vuepress构建的[web端博客](http://xuedingmiao.com)配套而写的一套接口，读取构建后的博客目录文章json数据及博客标签云数据返回给前端展示

### 使用到的技术
- mpvue框架
- 小程序云开发
- 小程序markdown内容渲染
- iview、vantUI库
- koa框架
- 部署采用的pm2管理
- vuepress(博客内容来源于vuepress构建)

### 扫码体验
<img src="/xcx_qrcode.jpg" height="330" width="330">

### 更新日志
- 2020/05/21
    - 初版更新，略丑
- 2020/05/23
    - 修复文章图片显示
    - 首页博客列表改成下拉加载
- 2020/05/24
    - 优化分享功能
    - 修复文章详情页分享卡片点击后无法获取文章内容的bug
- 2020/05/26
    - 增加微信公众号文章抓取API
    - 小程序增加微信公众号文章显示
- 2020/05/27
    - 优化博客首页
    - 博客文章json生成优化
- 2020/06/02
    - 增加博客搜索API
    - 增加获取小程序token接口
- 2020/06/08
    - 增加博客分享朋友圈海报
- 2020/06/10
    - 小程序发现页增加产品&小程序开发笔记
    - 关于页增加订阅新文章消息通知
- 2020/06/13
    - 小程序首页博客列表改为瀑布流加载
- 2020/06/17
    - 小程序首页添加搜索
- 2020/07/07
    - 添加分享朋友圈功能
    