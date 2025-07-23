const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// 提供靜態文件
app.use(express.static(path.join(__dirname)));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// 首頁路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 作品頁路由
app.get('/work', (req, res) => {
    res.sendFile(path.join(__dirname, 'work.html'));
});

app.get('/work-info', (req, res) => {
    res.sendFile(path.join(__dirname, 'work-info.html'));
});

// 聯絡頁路由
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// 關於我們頁路由
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// 服務頁路由
app.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, 'service.html'));
});

app.get('/service-info', (req, res) => {
    res.sendFile(path.join(__dirname, 'service-info.html'));
});

// 图片资源分析页面路由
app.get('/index-resource', (req, res) => {
    res.sendFile(path.join(__dirname, 'index-resource.html'));
});

// 新增：about-resource.html 路由
app.get('/about-resource.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about-resource.html'));
});

// 新增：contact-resource.html 路由
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-resource.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 注意：聯絡表單 API 已移至 api/contact/index.js (Vercel Serverless Function)

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
}); 