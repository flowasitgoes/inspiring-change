import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // 添加 CORS 標頭
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 處理 OPTIONS 請求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 測試端點 - GET 請求
  if (req.method === 'GET') {
    return res.status(200).json({ 
      code: '0000', 
      message: 'API 端點正常運作',
      timestamp: new Date().toISOString()
    });
  }

  // 只允許 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ code: '9999', message: '只允許 POST 請求' });
  }

  console.log('📧 收到聯絡表單資料:', req.body);
  
  const { name, phone, email, company_name, company_tel, mobile, company_url, content } = req.body;

  // 驗證必填欄位
  if (!name || !email || !content) {
    console.error('❌ 缺少必填欄位:', { name, email, content });
    return res.status(400).json({ 
      code: '9999', 
      message: '請填寫姓名、信箱和內容' 
    });
  }

  // 請填入你的 Gmail 或其他 SMTP 設定
  let transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || 'flowasitgoes@gmail.com',
      pass: process.env.GMAIL_PASS || 'vmkuhtiluioceafa'
    }
  });

  let mailOptions = {
    from: process.env.GMAIL_USER || 'flowasitgoes@gmail.com',
    to: 'service@tj-tech.pro',
    subject: '網站聯絡表單',
    text: `
姓名: ${name}
電話: ${phone || '未填寫'}
Email: ${email}
公司名稱: ${company_name || '未填寫'}
公司電話: ${company_tel || '未填寫'}
手機號碼: ${mobile || '未填寫'}
公司網址: ${company_url || '未填寫'}
來源: ${req.body['source[]'] || '未填寫'}
需求類型: ${req.body.subject || '未填寫'}
預算: ${req.body.budget || '未填寫'}
內容: ${content}
    `,
    html: `
<h2>網站聯絡表單</h2>
<table style="border-collapse: collapse; width: 100%;">
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>姓名:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>電話:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone || '未填寫'}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>公司名稱:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${company_name || '未填寫'}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>公司電話:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${company_tel || '未填寫'}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>手機號碼:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${mobile || '未填寫'}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>公司網址:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${company_url || '未填寫'}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>來源:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${req.body['source[]'] || '未填寫'}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>需求類型:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${req.body.subject || '未填寫'}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>預算:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${req.body.budget || '未填寫'}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>內容:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${content}</td></tr>
</table>
    `
  };

  try {
    console.log('📤 準備發送郵件...');
    console.log('📤 收件人:', mailOptions.to);
    console.log('📤 主旨:', mailOptions.subject);
    
    await transporter.sendMail(mailOptions);
    
    console.log('✅ 郵件發送成功!');
    res.status(200).json({ code: '0000', message: '已寄出' });
    
  } catch (err) {
    console.error('💥 郵件發送失敗:');
    console.error('💥 錯誤類型:', err.name);
    console.error('💥 錯誤訊息:', err.message);
    console.error('💥 完整錯誤:', err);
    
    res.status(500).json({ 
      code: '9999', 
      message: '寄信失敗，請稍後再試',
      error: err.message 
    });
  }
} 