# 2023新春版：React+Antd开发Chrome插件教程

基于Create-React-APP的Chrome Extension Manifest V3工程脚手架。

本项目架构实现了以下功能：

- 基于Create-React-App 5.0.1搭建
- 基于Chrome Extension Manifest V3规范
- 集成Sass/Scss/Less/Stylus
- 集成Ant Design 5.x
- 集成mock.js、mockjs-fetch模拟请求
- 集成http-proxy-middleware 反向代理
- 集成react-router-dom v6.8
- 将popup、content、background目录互相独立，便于团队协作开发维护
- 按照Chrome Extension最终生成目录要求配置webpack
- 封装fetch，满足popup、content script、background script跨域请求
- 设置.env.development环境变量，便于在开发环境下禁止委托background script发起请求
- 实现了完整的Chrome Extension MV3项目Demo。


## 使用方法：开发环境

> ※注：为方便演示接口请求，本Demo使用了mock.js，也配置了反向代理。
> mock.js便于直接调试，使用前请修改src/api/index.js，将import '@/mock'前的注释去掉，保证mock.js的正确引入。
> 如使用反向代理，需要自行在本地搭建API服务，接口返回数据可参考src/mock.js中的数据。

执行：npm start 或 yarn start

## 使用方法：build项目

> ※注：执行build前一定检查是否取消mock.js，即确认src/api/index.js中，将import '@/mock'注释掉。这是因为mock.js使用window变量，而运行background script的Service Worker不支持window，将导致插件运行失败。

执行：npm build 或 yarn build


## 配套教程

📚📚本项目有详细的讲解教程，原文请关注我的微信公众号【卧梅又闻花】📚📚

查阅本项目完整教程：[《2023新春版：React+Antd开发Chrome插件教程》](https://mp.weixin.qq.com)

### 教程目录

强烈建议按照以下章节一步一步边学边做，大约40分钟的时间，就可以快速掌握整个项目的原理和细节。这样在以后遇到新问题的时候，可以知道从哪个环节入手。

```
1 初始化项目
1.1 使用create-react-app新建项目
1.2 精简项目
2 Chrome Extension基础
2.1 Manifest V3概述
2.2 Manifest V3 主要新特性
2.3 Chrome Extension的组成
2.4 规划build生成的目录结构
2.5 配置manifest.json
3 项目目录结构设计
4 Webpack配置
4.1 配置国内镜像源
4.2 暴露Webpack
4.3 支持Sass/Scss
4.4 支持Less
4.5 支持Stylus
4.6 设置路径别名
4.7 禁止build项目生成map文件
4.8 设置多入口
4.9 固定build生成的文件名
4.10 设置popup只引入自己的index.js
4.11 设置全局公用样式
4.12 初始化项目架构文件
5 引入Ant Design 5.x
5.1 安装Ant Design
5.2 设置Antd为中文语言
6 Popup开发
6.1 引入popup页面
6.2 构建popup的Login页面
6.3 构建popup的Home页面
6.4 构建popup的Account页面
6.5 配置popup页面路由
6.6 构建Nav导航组件
6.7 构建Entry二级路由框架页面
6.8 调整popup入口页面，打通全部路由
6.9 完善Login页面的登录跳转
6.10 设置popup页面尺寸
7 build项目并载入插件
8 background script开发
8.1 设置允许运行popup的页面规则
8.2 为什么插件图标在禁用页面不变成灰色
9 content script开发
9.1 向目标页面注入悬浮球
9.2 在content script中使用Antd
9.3 加载插件自身的静态图片资源（选读）
10 在开发环境中调试content script
11 API请求
11.1 background pages不支持XMLHttpRequest（axios）
11.2 使用mock.js和mockjs-fetch模拟请求
11.3 封装API及fetch业务逻辑
11.4 委托background script完成API请求
11.5 实现popup的Login页面API请求
11.6 设置开发环境的反向代理请求
11.7 实现content script的API请求
11.8 关键知识点小结
12 其他说明
12.1 permission权限配置
12.2 以<script>方式向目标页面插入js
12.3 Service Worker调试
12.4 popup页面调试
12.5 精简最终build文件
13 项目Git源码
结束语
```