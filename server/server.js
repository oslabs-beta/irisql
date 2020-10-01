const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/build', express.static(path.join(__dirname, '../build')))


// Serve index.html for our routes declared with react router
app.use('/prototyper', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));
app.use('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});