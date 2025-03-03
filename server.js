// server.js (requires Express)
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/exchange-token', async (req, res) => {
    const { code } = req.body;
    
    try {
        const response = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code
        }, {
            headers: { Accept: 'application/json' }
        });

        res.json({ token: response.data.access_token });
    } catch (error) {
        res.status(500).json({ error: 'Authentication failed' });
    }
});

app.listen(3001, () => console.log('Token exchange service running on port 3001'));
