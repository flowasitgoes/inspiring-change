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

// 聯絡表單 API
app.post('/api/contact', async (req, res) => {
    console.log('收到表單資料:', req.body); // 除錯用
    const { name, phone, email, company_name, company_tel, mobile, company_url, content } = req.body;
    // 你可以根據表單欄位擴充

    // 請填入你的 Gmail 或其他 SMTP 設定
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'flowasitgoes@gmail.com ', // 改成你的寄件者信箱
            pass: 'vmkuhtiluioceafa'
        }
    });

    let mailOptions = {
        from: `${email}`,
        to: 'service@tj-tech.pro',
        subject: '網站聯絡表單',
        text: `
          姓名: ${name}
          電話: ${phone}
          Email: ${email}
          公司名稱: ${company_name}
          公司電話: ${company_tel}
          手機號碼: ${mobile}
          公司網址: ${company_url}
          來源: ${req.body['source[]']}
          需求類型: ${req.body.subject}
          預算: ${req.body.budget}
          內容: ${content}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ code: '0000', message: '已寄出' });
    } catch (err) {
        res.status(500).json({ code: '9999', message: '寄信失敗', error: err });
    }
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
}); 