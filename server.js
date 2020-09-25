const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
app.use(cors());

app.get('/data', (req, res) => {
  return res.send(JSON.stringify(data));
});

app.listen(process.env.PORT || 8080);