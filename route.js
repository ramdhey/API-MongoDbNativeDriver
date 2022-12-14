const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('./db');

// This section will help you get a list of all the records.
recordRoutes.route('/add').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('MerekHp')
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });
});



module.exports = recordRoutes;