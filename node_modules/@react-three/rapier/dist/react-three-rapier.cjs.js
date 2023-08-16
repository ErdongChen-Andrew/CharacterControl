'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./react-three-rapier.cjs.prod.js");
} else {
  module.exports = require("./react-three-rapier.cjs.dev.js");
}
