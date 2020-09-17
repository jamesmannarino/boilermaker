const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'))
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')))

app.listen(PORT, () => console.log(`connected at PORT ${PORT}`))

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
