// const { Pool } = require('pg');
const myURI = '';

// when use MongoDB
// const URI = process.env.MONGO_URI || myURI;

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
