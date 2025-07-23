import nodemailer from 'nodemailer';

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

  console.log('收到表單資料:', req.body); // 除錯用
  
  const { name, phone, email, company_name, company_tel, mobile, company_url, content } = req.body;

  // 請填入你的 Gmail 或其他 SMTP 設定
  let transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: 'flowasitgoes@gmail.com', // 改成你的寄件者信箱
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
    res.status(200).json({ code: '0000', message: '已寄出' });
  } catch (err) {
    console.error('寄信失敗:', err);
    res.status(500).json({ code: '9999', message: '寄信失敗', error: err.message });
  }
} 