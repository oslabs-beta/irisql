const express = require('express');
const path = require('path');
const app = express();
const apiRouter = require('./routes/apiRouter');
const { graphqlHTTP } = require('express-graphql');
const testSchema = require('./schema/testSchema');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/api', apiRouter);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: testSchema,
    graphiql: true,
  })
);

// Serve index.html for our routes declared with react router
app.use('/prototyper', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);
app.use('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);

//catch all 404 error
app.use((req, res) => res.sendStatus(404));

//global error handler
app.use((error, req, res, next) => {
  const defaultError = {
    log: 'An error occured in middleware',
    status: 400,
    message: { error: 'An error occurred' },
  };
  const errObj = { ...defaultError, ...error };
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

module.exports = app;
