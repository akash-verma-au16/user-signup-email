const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connDB = require('./db/mongoose');
const routes = require('./routes');

// init env vars
require('dotenv').config({ path: './config/config.env' });
// init express app
const app = express();
const port = process.env.PORT;
// init db
connDB();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
