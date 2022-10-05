const express = require('express');
const path = require('path');
const cors = require('cors');

const {PORT} = require('./configs/config');
const {apiRouter} = require('./routes');

const app = express();
app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.use('*', (req, res) => {
  res.status(404).json('Route not fount');
});

app.listen(PORT, () => {
  console.log('App listen', PORT);
});
