const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to your GitHub Actions Practice App!",
    status: "Success",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
//this is a comment