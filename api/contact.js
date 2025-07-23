const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // 設定 CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 處理 OPTIONS 請求
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 只允許 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      code: '0001', 
      message: '只允許 POST 請求' 
    });
  }

  try {
    const { name, phone, email, subject, content } = req.body;

    // 驗證必填欄位
    if (!name || !phone || !email || !subject || !content) {
      return res.status(400).json({
        code: '0002',
        message: '請填寫所有必填欄位'
      });
    }

    // 驗證郵箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        code: '0003',
        message: '郵箱格式不正確'
      });
    }

    // 設定郵件傳輸
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // 郵件內容
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'service@tj-tech.pro',
      subject: `網站聯絡表單: ${subject}`,
      html: `
        <h2>新的聯絡表單提交</h2>
        <p><strong>姓名:</strong> ${name}</p>
        <p><strong>電話:</strong> ${phone}</p>
        <p><strong>郵箱:</strong> ${email}</p>
        <p><strong>主旨:</strong> ${subject}</p>
        <p><strong>內容:</strong></p>
        <p>${content.replace(/\n/g, '<br>')}</p>
      `
    };

    // 發送郵件
    await transporter.sendMail(mailOptions);

    console.log('✅ 郵件發送成功:', { name, email, subject });

    res.status(200).json({
      code: '0000',
      message: '郵件發送成功'
    });

  } catch (error) {
    console.error('❌ 郵件發送失敗:', error);
    
    res.status(500).json({
      code: '0004',
      message: '郵件發送失敗，請稍後再試',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}; 