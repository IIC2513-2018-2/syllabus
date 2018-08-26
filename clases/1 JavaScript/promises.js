const getHelloAsync = require('./hello-async');

async function getHelloWorldAsync() {
  const h3ll0 = await getHelloAsync();
  return h3ll0 + ' World!';
}

async function printHelloWorld() {
  const helloWorld = await getHelloWorldAsync();
  console.log(helloWorld);
}

printHelloWorld();