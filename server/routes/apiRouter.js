const express = require('express');
const apiController = require('../controllers/apiController');

const apiRouter = express.Router();

apiRouter.get('/', apiController.getInfo, (req, res) => res.status(200).json(res.locals.info));

apiRouter.post('/', apiController.createNewSchema, (req, res) => {
  res.locals.newSchema,
    (err) => {
      if (err) throw err;
    };
  res.status(200).json(res.locals.newSchema);
});

module.exports = apiRouter;
