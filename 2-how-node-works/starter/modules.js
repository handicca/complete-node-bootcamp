// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const Calc = require("./test-module-1");
const calc1 = new Calc();
console.log(calc1.add(2, 6));

// exports
// const calc2 = require("./test-module-2");
// console.log(calc2.add(3, 7));
const { add, multiply } = require("./test-module-2");
console.log(add(5, 5));
console.log(multiply(5, 2));

// Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
