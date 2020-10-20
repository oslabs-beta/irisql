const { generateSchema } = require('../schema/generateSchema');

const apiController = {};

// middleware to generate a graphql schema based on req body from user inputs
apiController.createNewSchema = (req, res, next) => {
  res.locals.newSchema = generateSchema(req.body);
  if (!res.locals.newSchema) {
    return next({
      log:
        'apiController.createNewSchema: ERROR: Invalid or unfound required data on res.locals object .',
      message: {
        err: 'apiController.createNewSchema: ERROR: Check server logs for details',
      },
    });
  }
  return next();
};

module.exports = apiController;
