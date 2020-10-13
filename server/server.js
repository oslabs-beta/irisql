const express = require("express");
const path = require("path");
const app = express();
const apiRouter = require("./routes/apiRouter");
const testRouter = require("./routes/testRouter");
const { graphqlHTTP } = require("express-graphql");
const testSchema = require("./schema/testSchema");
const PORT = 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: testSchema,
    graphiql: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/build", express.static(path.join(__dirname, "../build")));

app.use("/api", apiRouter);

app.use("/test", testRouter);

// Serve index.html for our routes declared with react router
app.use("/prototyper", (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"))
);
app.use("/", (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"))
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

module.exports = app;
