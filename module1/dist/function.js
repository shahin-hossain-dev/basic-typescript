"use strict";
// introduction to function
//normal function
function add(num1, num2) {
  return num1 + num2;
}
// add(5, 10) // it is valid cause 2 argument is number
//add(5, true) //it will give an error cause 2 arguments will have to be number. here is arguments is number & boolean
//arrow function
const addArrow = (num1, num2) => {
  return num1 + num2;
};
addArrow(2, 6);
