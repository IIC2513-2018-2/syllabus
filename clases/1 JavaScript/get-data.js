module.exports = function getData(cb) {
  setTimeout(
    () => cb(null, 'Hello World!'),
    Math.random() * 1000
  );
}