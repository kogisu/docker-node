const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
// const HOST = '0.0.0.0';

//middleware
// App
const app = express();
console.log('environment: ', app.get('env'));

app.get('/api/customer', (req, res) => {
  const customer = 'kent ogisu';
  res.setHeader('Content-Type', 'application/json');
  res.json(customer);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
console.log(`Running on http://127.0.0.1:${PORT}`);