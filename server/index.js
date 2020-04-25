//
//
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

const rentals = [
  {
    city: 'New York',
    title: 'Concrete Jungle Where dreams are made of',
  },
  {
    city: 'Tampa',
    title: 'Sunny and Humid',
  },
  {
    _id: 'bozo',
    city: 'Miami',
    title: 'Beautiful People',
  },
];

// MIDDLEWARE
app.use(bodyParser.json());

app.get('/api/v1/rentals', (req, res) => {
  return res.json(rentals);
});

app.get('/api/v1/rentals/:rentalId', (req, res) => {
  const { rentalId } = req.params;
  const rental = rentals.find((r) => r._id === rentalId);

  return res.json(rental);
});

app.post('/api/v1/rentals/', (req, res) => {
  const rentalData = req.body;
  rentals.push(rentalData);

  return res.json({ message: `Rental with id: ${rentalData._id} was added` });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
