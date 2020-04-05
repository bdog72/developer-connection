const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/App', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

////////////// CREATE MONGOOSE SCHEMA AND MODEL

const carSchema = mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  avail: Boolean,
});

const Car = mongoose.model('Car', carSchema);

///////////////////////////////////////////////

app.post('/api/addcar', (req, res) => {
  const addCar = new Car({
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    avail: req.body.avail,
  });

  addCar.save((err, doc) => {
    if (err) return console.log(err);
    res.sendStatus(200);
  });
});

app.get('/api/getcars', (req, res) => {
  Car.find({}, (err, doc) => {
    if (err) return console.log(err);
    res.json(doc);
  });
});

app.post('/api/removecar', (req, res) => {
  const id = req.body.id;
  const brand = req.body.brand;

  Car.remove({}, (err, doc) => {
    if (err) return console.log(err);
    res.json(doc);
  });
});

app.post('/api/updatecar', (req, res) => {
  const id = req.body.id;
  const brand = req.body.brand;

  Car.findById(id, (err, car) => {
    if (err) return console.log(err);

    car.set({
      brand: brand,
    });
    car.save((err, doc) => {
      if (err) return console.log(err);
      res.json(doc);
    });
  });

  // Car.findByIdAndUpdate(id,{ $set: {
  //     brand: brand
  // }},
  // {new:false},
  // (err,doc)=>{
  //     if(err) return console.log(err);
  //     console.log(doc)
  //     res.json(doc)
  // })
});

const port = process.env.PORT || 3001;

app.listen(port);

// //
// //
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/App', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// ////// CREATE MONGOOSE SCHEMA AND MODEL //////

// const carSchema = mongoose.Schema({
//   brand: String,
//   model: String,
//   year: Number,
//   avail: Boolean,
// });

// const Car = mongoose.model('Car', carSchema);

// //////////////////////////////////////////////

// app.post('/api/addcar', (req, res) => {
//   const addCar = new Car({
//     brand: req.body.brand,
//     model: req.body.model,
//     year: req.body.year,
//     avail: req.body.avail,
//   });

//   addCar.save((err, doc) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(doc);
//     }
//   });
// });

// app.get('/api/getcars', (req, res) => {
//   Car.find({ brand: 'Ford' }, (err, doc) => {
//     if (err) {
//       return console.log(err);
//     } else {
//       res.json(doc);
//     }
//   });
// });

// const port = process.env.PORT || 3001;
// app.listen(port);
