const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // 設置 CORS 標頭
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // 處理 OPTIONS 請求（預檢請求）
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 只允許 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      code: '9999',
      error: 'Method not allowed',
      message: '只支援 POST 請求'
    });
  }

  console.log('收到表單資料:', req.body);
  
  const { name, phone, email, company_name, company_tel, mobile, company_url, content } = req.body;

  try {
    console.log('開始設定郵件傳輸器...');
    
    // 使用 Gmail SMTP 設定
    let transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'flowasitgoes@gmail.com',
        pass: 'vmkuhtiluioceafa'
      }
    });

    console.log('郵件傳輸器設定完成');

    // 準備郵件內容
    const emailContent = `
網站聯絡表單 - 新訊息

姓名: ${name || '未填寫'}
電話: ${phone || '未填寫'}
Email: ${email || '未填寫'}
公司名稱: ${company_name || '未填寫'}
公司電話: ${company_tel || '未填寫'}
手機號碼: ${mobile || '未填寫'}
公司網址: ${company_url || '未填寫'}
來源: ${req.body['source[]'] || '未填寫'}
需求類型: ${req.body.subject || '未填寫'}
預算: ${req.body.budget || '未填寫'}
內容: ${content || '未填寫'}

提交時間: ${new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })}
    `;

    let mailOptions = {
      from: 'flowasitgoes@gmail.com', // 使用固定的寄件者
      to: 'service@tj-tech.pro',
      subject: `網站聯絡表單 - ${name || '新客戶'}`,
      text: emailContent
    };

    console.log('準備發送郵件...');
    console.log('郵件選項:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    // 發送郵件
    const result = await transporter.sendMail(mailOptions);
    
    console.log('郵件發送成功:', result);
    
    res.status(200).json({ 
      code: '0000', 
      message: '郵件已成功寄出',
      messageId: result.messageId,
      timestamp: new Date().toISOString()
    });

  } catch (err) {
    console.error('郵件發送失敗:', err);
    console.error('錯誤詳情:', {
      message: err.message,
      code: err.code,
      command: err.command,
      responseCode: err.responseCode,
      response: err.response
    });
    
    res.status(500).json({ 
      code: '9999', 
      message: '郵件發送失敗', 
      error: err.message,
      errorCode: err.code,
      timestamp: new Date().toISOString()
    });
  }
} 