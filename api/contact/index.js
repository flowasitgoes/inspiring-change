const nodemailer = require('nodemailer');

// 聯絡表單 API
export default async function handler(req, res) {
    // 只允許 POST 請求
    if (req.method !== 'POST') {
        return res.status(405).json({ code: '9999', message: '只允許 POST 請求' });
    }

    console.log('📧 收到聯絡表單請求');
    console.log('📧 請求方法:', req.method);
    console.log('📧 請求標頭:', req.headers);
    console.log('📧 請求主體:', req.body);

    const { name, phone, email, company_name, company_tel, mobile, company_url, content } = req.body;

    // 驗證必填欄位
    if (!name || !email || !content) {
        console.error('❌ 缺少必填欄位');
        return res.status(400).json({ 
            code: '9999', 
            message: '缺少必填欄位 (姓名、信箱、內容)' 
        });
    }

    try {
        // 創建郵件傳輸器
        console.log('📧 創建郵件傳輸器...');
        let transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER || 'flowasitgoes@gmail.com',
                pass: process.env.GMAIL_PASS || 'vmkuhtiluioceafa'
            }
        });

        // 準備郵件內容
        console.log('📧 準備郵件內容...');
        let mailOptions = {
            from: process.env.GMAIL_USER || 'flowasitgoes@gmail.com',
            to: 'service@tj-tech.pro',
            subject: '網站聯絡表單 - 新訊息',
            text: `
網站聯絡表單 - 新訊息

基本資訊:
姓名: ${name}
電話: ${phone || '未提供'}
Email: ${email}

公司資訊:
公司名稱: ${company_name || '未提供'}
公司電話: ${company_tel || '未提供'}
手機號碼: ${mobile || '未提供'}
公司網址: ${company_url || '未提供'}

需求資訊:
來源: ${req.body['source[]'] || '未提供'}
需求類型: ${req.body.subject || '未提供'}
預算: ${req.body.budget || '未提供'}

內容:
${content}

---
此郵件由網站聯絡表單自動發送
發送時間: ${new Date().toLocaleString('zh-TW')}
            `,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>網站聯絡表單 - 新訊息</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        .section { margin-bottom: 20px; }
        .label { font-weight: bold; color: #007bff; }
        .content { background: #f8f9fa; padding: 15px; border-radius: 5px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>📧 網站聯絡表單 - 新訊息</h2>
        </div>
        
        <div class="section">
            <h3>👤 基本資訊</h3>
            <p><span class="label">姓名:</span> ${name}</p>
            <p><span class="label">電話:</span> ${phone || '未提供'}</p>
            <p><span class="label">Email:</span> ${email}</p>
        </div>
        
        <div class="section">
            <h3>🏢 公司資訊</h3>
            <p><span class="label">公司名稱:</span> ${company_name || '未提供'}</p>
            <p><span class="label">公司電話:</span> ${company_tel || '未提供'}</p>
            <p><span class="label">手機號碼:</span> ${mobile || '未提供'}</p>
            <p><span class="label">公司網址:</span> ${company_url || '未提供'}</p>
        </div>
        
        <div class="section">
            <h3>📋 需求資訊</h3>
            <p><span class="label">來源:</span> ${req.body['source[]'] || '未提供'}</p>
            <p><span class="label">需求類型:</span> ${req.body.subject || '未提供'}</p>
            <p><span class="label">預算:</span> ${req.body.budget || '未提供'}</p>
        </div>
        
        <div class="section">
            <h3>💬 內容</h3>
            <div class="content">${content.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div class="footer">
            <p>此郵件由網站聯絡表單自動發送</p>
            <p>發送時間: ${new Date().toLocaleString('zh-TW')}</p>
        </div>
    </div>
</body>
</html>
            `
        };

        // 發送郵件
        console.log('📧 開始發送郵件...');
        const info = await transporter.sendMail(mailOptions);
        
        console.log('✅ 郵件發送成功!');
        console.log('📧 郵件 ID:', info.messageId);
        console.log('📧 回應:', info.response);

        res.status(200).json({ 
            code: '0000', 
            message: '郵件發送成功',
            messageId: info.messageId
        });

    } catch (error) {
        console.error('💥 郵件發送失敗:');
        console.error('💥 錯誤類型:', error.name);
        console.error('💥 錯誤訊息:', error.message);
        console.error('💥 錯誤堆疊:', error.stack);
        console.error('💥 完整錯誤:', error);

        // 根據錯誤類型提供更具體的錯誤訊息
        let errorMessage = '寄信失敗，請稍後再試';
        
        if (error.code === 'EAUTH') {
            errorMessage = '郵件認證失敗，請檢查帳號密碼設定';
        } else if (error.code === 'ECONNECTION') {
            errorMessage = '郵件服務連接失敗，請檢查網路設定';
        } else if (error.code === 'ETIMEDOUT') {
            errorMessage = '郵件發送超時，請稍後再試';
        }

        res.status(500).json({ 
            code: '9999', 
            message: errorMessage,
            error: process.env.NODE_ENV === 'development' ? error.message : '內部錯誤'
        });
    }
} 