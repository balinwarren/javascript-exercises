const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(args) {
  let sum = 0;
	for (let i = 0; i<args.length; i++){
    sum += args[i];
  } return sum
};

const multiply = function(args) {
  let tot = 1;
  for (let i = 0; i<args.length; i++){
    tot *= args[i];
  } return tot
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(args) {
  let tot = 1
  for (let i = args; i > 0; i--) {
    tot *= i
  } return tot;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
