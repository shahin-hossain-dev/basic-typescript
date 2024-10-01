// introduction to function

//normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// add(5, 10) // it is valid cause 2 argument is number
//add(5, true) //it will give an error cause 2 arguments will have to be number. here is arguments is number & boolean

//arrow function

const addArrow = (num1: number, num2: number = 10): number => num1 + num2; //default parameter value 10

addArrow(2, 6);

// যখন কোনো function object এর মধ্যে লিখা হয় তখন সেটাকে বলা হয় method.

//Object -> function -> Method
// how to write a ts method in object
const poorUser = {
  name: "Shahin",
  balance: 0,
  addToBalance(balance: number): string {
    return `Now Balance Is: ${this.balance + balance}`;
  },
};

// how to write an array
// define type with a callback function
const arr: number[] = [1, 2, 3, 4, 5, 6];

const result: number[] = arr.map(
  (element: number): number => element * element
);
