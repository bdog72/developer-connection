//
//

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const config = require('./config/dev');

const { provideErrorHandler } = require('./middlewares');

//routes
const rentalRoutes = require('./routes/rentals');
const usersRoutes = require('./routes/users');

const { onlyAuthUser } = require('./controllers/users.js');

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
app.use(provideErrorHandler);

app.get('/api/v1/secret', onlyAuthUser, (req, res) => {
  return res.json({ message: 'Super Secret Message' });
});

// API routes
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
