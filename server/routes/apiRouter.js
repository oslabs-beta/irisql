const express = require('express');
const apiController = require('../controllers/apiController');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/', apiController.createNewSchema, (req, res) => {
  res.status(200).json(res.locals.newSchema);
});

router.post('/test', apiController.createNewSchema, (req, res) => {
  fs.writeFile(path.resolve(__dirname, '../schema/testSchema.js'), res.locals.newSchema, (err) => {
    if (err) throw err;
  });
  res.status(200).json(res.locals.newSchema);
});

module.exports = router;
