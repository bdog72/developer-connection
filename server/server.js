//
//
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

const user = require('./routes/user');

mongoose.connect(config.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/users', user);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is running on port: ${port}`));
