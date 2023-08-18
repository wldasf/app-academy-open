const { helloMessage } = require("./messages/hello-message");
const { giveMessageToMrsPotato } = require("./send-messages/give-message-to-mrs-potato");
const { sayHelloTo } = require("./send-messages/say-hello-to");

// Your code here
const msg1 = helloMessage;
const msg2 = sayHelloTo;
const msg3 = giveMessageToMrsPotato;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
