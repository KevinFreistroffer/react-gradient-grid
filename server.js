const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res, next) => {
  res.sendFile(express.static(path.join(__dirname, './public/index.html')));
});

app.listen(process.env.PORT, () => {
  console.log('Server started.');
});
