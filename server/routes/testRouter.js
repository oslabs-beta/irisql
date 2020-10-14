const express = require("express");
const controller = require("../controller.js");
const testRouter = express.Router();
const fs = require("fs");
const path = require("path");

testRouter.get("/", controller.getInfo, (req, res) => {
  return res.status(200).json(res.locals.info);
});

testRouter.post("/", controller.createNewSchema, (req, res) => {
  fs.writeFile(
    path.resolve(__dirname, "../schema/testSchema.js"),
    res.locals.newSchema,
    (err) => {
      if (err) throw err;
    }
  );
  res.status(200).json(res.locals.newSchema);
});

module.exports = testRouter;
