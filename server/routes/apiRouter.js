const express = require('express');
const controller = require('../controller.js');

const apiRouter = express.Router();

apiRouter.get('/', controller.getInfo, (req, res) => res.status(200).json(res.locals.info));

apiRouter.post('/', controller.createNewSchema, (req, res) => {
  res.locals.newSchema,
  (err) => {
    if (err) throw err;
  };
  res.status(200).json(res.locals.newSchema);
});

module.exports = apiRouter;
