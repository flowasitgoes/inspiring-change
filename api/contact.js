const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // 設置 CORS 標頭
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 處理 OPTIONS 請求（預檢請求）
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // 只允許 POST 請求
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            code: '9999', 
            message: '只允許 POST 請求',
            method: req.method 
        });
    }

    console.log('收到表單資料:', req.body); // 除錯用
    
    try {
        const { name, phone, email, company_name, company_tel, mobile, company_url, content } = req.body;
        
        // 驗證必要欄位
        if (!name || !phone || !email || !company_name || !content) {
            return res.status(400).json({ 
                code: '9999', 
                message: '缺少必要欄位' 
            });
        }

        // 請填入你的 Gmail 或其他 SMTP 設定
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'flowasitgoes@gmail.com', // 移除多餘的空格
                pass: 'vmkuhtiluioceafa'
            }
        });

        let mailOptions = {
            from: `"網站聯絡表單" <flowasitgoes@gmail.com>`, // 修改寄件者格式
            to: 'service@tj-tech.pro',
            subject: '網站聯絡表單',
            text: `
姓名: ${name}
電話: ${phone}
Email: ${email}
公司名稱: ${company_name}
公司電話: ${company_tel || '未填寫'}
手機號碼: ${mobile || '未填寫'}
公司網址: ${company_url || '未填寫'}
來源: ${Array.isArray(req.body['source[]']) ? req.body['source[]'].join(', ') : req.body['source[]'] || '未填寫'}
需求類型: ${req.body.subject || '未填寫'}
預算: ${req.body.budget || '未填寫'}
內容: ${content}
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('郵件發送成功');
        res.json({ code: '0000', message: '已寄出' });
        
    } catch (err) {
        console.error('郵件發送失敗:', err);
        res.status(500).json({ 
            code: '9999', 
            message: '寄信失敗', 
            error: err.message 
        });
    }
}; 