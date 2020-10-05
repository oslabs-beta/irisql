const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router.get('/', controller.getInfo, (req, res) => {
     return res.status(200).json(res.locals.info)
})

// router.post('/', controller.createNewSchema, (req, res) => {
//     res.status(200).json(res.locals.newSchema)
// })

module.exports = router;