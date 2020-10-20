const { Pool } = require('pg');

// put user's URI here
const myURI = '';

const URI = process.env.PG_URI || myURI;

// connect PostgreSQL
const pool = new Pool({
  connectionString: URI,
});

// export query
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
