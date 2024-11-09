{
  /**
   * ------------------------------
   * Constraint with keyof Operator
   * ------------------------------
   *
   *  constrain টা হলো type মধ্যে থাকা property গুলোকে নিয়ে union type তৈরী করে আর এটা করতে হয়ে keyof operator দিয়ে।
   */

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually Owner type
  type Owner2 = keyof Vehicle; // same to the Owner with keyof operator

  const person1: Owner = "bike";
  const person2: Owner2 = "ship";

  const user = {
    name: "Shahin",
    age: 26,
    address: "Dhaka",
  };
  // এখানে T এর property গুলোকে X এর মধ্যে extends করে দেয়া হয়েছে। এবং keyof দিয়ে বুঝায় ভিতরে property গুলো union type হয়ে যাবে। T এর যেকোনে একটি property X এর মধ্যে থাকতে হবে।
  const getPropertyValue = <T, X extends keyof T>(obj: T, key: X) => {
    return obj[key];
  };

  const name = getPropertyValue(user, "name");
  const age = getPropertyValue(user, "age");

  //   console.log(name, age);

  //<----------------------------
}
