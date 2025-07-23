module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    res.json({ 
        code: '0000', 
        message: 'API 運作正常',
        method: req.method,
        timestamp: new Date().toISOString(),
        body: req.body
    });
}; 