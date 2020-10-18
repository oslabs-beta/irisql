const apiController = {};
const { generateSchema } = require('../generateSchema.js');

apiController.getInfo = (req, res, next) => {
  res.locals.info = 'hello';
  return next();
};

apiController.createNewSchema = (req, res, next) => {
  res.locals.newSchema = generateSchema(req.body);
  return next();
};

module.exports = apiController;
