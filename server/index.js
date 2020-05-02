//
//

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const config = require('./config/dev');

//routes
const rentalRoutes = require('./routes/rentals');
const usersRoutes = require('./routes/users');

// models
const Rental = require('./models/rental');
const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Connected to DB');
  }
);

// MIDDLEWARE
app.use(bodyParser.json());

// API routes
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
