const hello_message = require("./hello-message");
const helloMessage = hello_message.helloMessage;

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

module.exports.sayMessage = sayMessage;
