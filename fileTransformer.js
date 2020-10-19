/* eslint-disable no-unused-vars */
// File that returns the same thing any time jest sees svg files
const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
