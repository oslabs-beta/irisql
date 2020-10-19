const { generateSchema } = require('../schema/generateSchema');

const apiController = {};

// middleware to generate a graphql schema based on req body from user inputs
apiController.createNewSchema = (req, res, next) => {
  res.locals.newSchema = generateSchema(req.body);
  next();
};

module.exports = apiController;
