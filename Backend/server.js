const express = require('express');
const bodyParser = require('body-parser');
const dnsDetection = require('./dnsDetection');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('frontend'));

// Endpoint to submit DNS responses
app.post('/api/dns-response', (req, res) => {
    const responses = req.body.responses;
    const result = dnsDetection.GetDNSResponse(responses);
    res.json(result);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

