const { generateSchema } = require('../schema/generateSchema');

const apiController = {};

apiController.createNewSchema = (req, res, next) => {
  res.locals.newSchema = generateSchema(req.body);
  return next();
};

module.exports = apiController;
