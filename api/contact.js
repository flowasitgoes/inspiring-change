const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // 只允許 POST 請求
    if (req.method !== 'POST') {
        return res.status(405).json({ code: '9999', message: '只允許 POST 請求' });
    }

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
}; 