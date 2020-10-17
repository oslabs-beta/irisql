// const { Pool } = require('pg');
// const mongoose = require('mongoose');

// user input URI
const myURI = '';

// when use MongoDB
// const URI = process.env.MONGO_URI || myURI;

// mongoose
//   .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
//   .then((data) => console.log('connected to database'))
//   .catch((err) => console.log('error: ', err));
// const db = mongoose.connection;

// when use PostgreSQL
const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: myURI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
