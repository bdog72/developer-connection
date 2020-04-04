//
//
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/App', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

////// CREATE MONGOOSE SCHEMA AND MODEL //////

const carSchema = mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  avail: Boolean
});

const Car = mongoose.model('Car', carSchema);

//////////////////////////////////////////////

app.post('/api/addcar', (req, res) => {
  const addCar = new Car({
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    avail: req.body.avail
  });

  addCar.save((err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log(doc);
    }
  });
});

app.get('/api/getcars', (req, res) => {
  Car.find((err, doc) => {
    if (err) {
      return console.log(err);
    } else {
      res.json(doc);
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port);
