module.exports = (req, res) => {
  res.json({
    status: 'OK',
    message: 'Vercel API 運作正常',
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url
  });
}; 