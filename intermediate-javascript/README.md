You can only assign a key to a variable using brackets obj[key] but not with obj.key

for (let variable in obj) {
  statement
}
You iterate through an object using the for...in loop.

A *callback* is accepting a function as an argument in another function. You have to call the parameter inside of the main function to activate the callback, callbackParameter()

You can opt for an anonymous callback function instead if you're only going to use it once. Assuming your main function is called foobar(parameter){} you can anonymously use it like this:

foobar(function() {
  console.log("hello");
});

You can use the anonymous callback if you don't want to setup a whole function.


