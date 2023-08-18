const say_hello_to = require("./say-hello-to");
const sayHelloTo = say_hello_to.sayHelloTo;

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

module.exports.giveMessageToMrsPotato = giveMessageToMrsPotato;
