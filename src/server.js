const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const api = require('./api');

const port = 4000;

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

app.use(morgan('dev'));
app.use(helmet());

app.use(express.json());
app.use('/api/v1', api);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
