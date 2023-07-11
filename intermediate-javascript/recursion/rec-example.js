function foo() {
  console.log("a");
  bar();
  console.log("e");
}

function bar() {
  console.log("b");
  baz();
  console.log("d");
}

function baz() {
  console.log("c");
}


// default parameter
function growNumber(num, amount = false) {
  if (amount) {
    console.log(num);
  }
}


// stack overflow
function pythagoreanCup() {
  pythagoreanCup();
}


// indirect recursion
function didYouDoTheThing() {
  ofCourseIDidTheThing();
}
function ofCourseIDidTheThing() {
  didYouDoTheThing();
}


// iterative vs recursive approach
// // iterative example
// countdown(startingNumber) {
//   for (let i = startingNumber; i > 0; i--) {
//     console.log(i);
//   }

//   console.log("Time's up!");
// }

// // recursive approach
// countdown(startingNumber) {
//   if (startingNumber === 0) {
//     console.log("Time's up!");
//     return;
//   }

//   console.log(startingNumber);
//   countdown(startingNumber - 1);
// }
