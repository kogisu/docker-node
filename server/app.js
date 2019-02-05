const express = require('express');
const cors = require('cors');

// Constants
const PORT = process.env.PORT || 8080;
// const HOST = '0.0.0.0';

// App
const app = express();

//Middleware
app.use(cors());

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