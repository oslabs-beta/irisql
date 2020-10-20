const mongoose = require('mongoose');

// put user's URI here
const myURI = '';

const URI = process.env.MONGO_URI || myURI;

// connect MongoDB
mongoose
  .connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((data) => console.log('connected to MongoDB'))
  .catch((err) => console.log('connection error: ', err));

// define mongoose schema
const Schema = mongoose.Schema;

// set a schema for one collection

// sets a schema for another collection

// create a model for each collection that will be part of the export

// export models
module.exports = {
  Movie,
  Director,
};
