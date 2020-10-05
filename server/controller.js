const controller = {}
const generateSchema = require('./generateSchema.js')
​
controller.getInfo = (req, res, next) => {
    res.locals.info = "hello";
    return next();
}
​
controller.createNewSchema = (req, res, next) => {
   
}
​
module.exports = controller; 