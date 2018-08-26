module.exports = function getHelloAsync() {
  return new Promise((resolve) => {
    setTimeout(
      function () { resolve('Hello'); },
      2000
    );
  });
};
