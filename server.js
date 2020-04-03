//
//
const express = require('express');
const app = express();
// const mongoose = require('mongoose');

const port = process.env.PORT || 3001;
app.listen(port);

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';

// app.get('/api/users', (req, res) => {
//   MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//     client
//       .db('Cars')
//       .collection('items')
//       .insertOne(
//         {
//           model: 'Mazda 3',
//           year: 2010
//         },
//         (err, res) => {
//           if (err) {
//             console.log(`ERROR: ${err}`);
//           }
//         }
//       );
//     client.close();
//   });
// });
