function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum;
  if (num1 > num2) {
    return multiplyHelper(num1);
  } else {
    return multiplyHelper(num2);
  }
}

function multiplyHelper(param) {
  return param * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum;
  if (num1 > num2) {
    return divideHelper(num1);
  } else {
    return divideHelper(num2);
  }
}

function divideHelper(param) {
  return param / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum;
  if (sum1 > sum2) {
    return eatHelper(sum1);
  } else {
    return eatHelper(sum2);
  }
}

function eatHelper(param) {
  return `I ate ${param} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog;
  if (weight1 < weight2) {
    return adoptHelper(weight1);
  } else {
    return adoptHelper(weight2);
  }
}

function adoptHelper(param) {
  return `I adopted a dog that weighs ${param} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
