var path = require('path');

(async function () {

  await require(path.join(__dirname, 'first', 'index'))("data 1", "result 1");

  await require(path.join(__dirname, 'second', 'index'))("data 2", "result 2");

  await require(path.join(__dirname, 'third', 'index'))("data 3", "result 3");

  console.log("Print in the main.js file")
})();
