module.exports = function(data, result) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(console.log(data, result));

    }, 1000);
  });
};
