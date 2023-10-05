const say_message = require("../messages/say-message");
const sayMessage = say_message.sayMessage;

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

module.exports.sayHelloTo = sayHelloTo;
