const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/build', express.static(path.join(__dirname, '../build')))

// Serve index.html on route '/'
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));

// app.get('/prototyper', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
})