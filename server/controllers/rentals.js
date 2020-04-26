//
//

const Rental = require('../models/rental');

exports.getRentals = (req, res) => {
  Rental.find({}, (error, foundRentals) => {
    if (error) {
      return res.status(422).send({
        errors: [
          { title: 'Rental Error!', message: 'Cannot retrieve rental data' },
        ],
      });
    }
    return res.json(foundRentals);
  });
};

exports.getRentalById = (req, res) => {
  const { rentalId } = req.params;
  Rental.findById(rentalId, (error, foundRental) => {
    if (error) {
      return res.status(422).send({
        errors: [
          { title: 'Rental Error!', message: 'Cannot retrieve rental data' },
        ],
      });
    }
    return res.json(foundRental);
  });
};

// exports.createRental = (req, res) => {
//   const rentalData = req.body;
//   rentals.push(rentalData);

//   return res.json({ message: `Rental with id: ${rentalData._id} was added` });
// };

// exports.deleteRental = (req, res) => {
//   const { id } = req.params;
//   const rIndex = rentals.findIndex((r) => r._id === id);

//   rentals.splice(rIndex, 1);
//   return res.json({ message: `Rental with id: ${id} was removed` });
// };

// exports.updateRental = (req, res) => {
//   const { id } = req.params;
//   const rentalToUpdate = req.body;
//   const rIndex = rentals.findIndex((r) => r._id === id);

//   rentals[rIndex].city = rentalToUpdate.city;
//   rentals[rIndex].title = rentalToUpdate.title;

//   return res.json({ message: `Rental with id: ${id} was updated` });
// };
