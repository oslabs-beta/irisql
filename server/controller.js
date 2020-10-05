const controller = {}
const { generateSchema } = require('./generateSchema.js')


controller.getInfo = (req, res, next) => {
    res.locals.info = generateSchema(input);
    return next();
}
// controller.createNewSchema = (req, res, next) => {
//     return next()
//  }

module.exports = controller; 