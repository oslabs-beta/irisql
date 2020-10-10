const express = require("express");
const path = require("path");
const app = express();
const router = require("./routes");
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

app.use("/api", router);

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
