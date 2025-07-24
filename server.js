// server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load API Key from .env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Serve static files (your portfolio)
app.use(express.static(path.join(__dirname)));

// Chat endpoint
app.post('/ask', async (req, res) => {
  const { question } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(question);
    const response = await result.response;
    const text = response.text();
    res.json({ answer: text });
  } catch (error) {
    console.error('Gemini Error:', error);
    res.status(500).json({ error: 'Something went wrong with Gemini API' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
