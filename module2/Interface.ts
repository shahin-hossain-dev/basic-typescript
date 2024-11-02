{
  //Interface
  // Difference between alias and interface

  //type declare এর object কে assign করার মত করে লিখতে হয়।
  // কিন্তু interface declare সময় = equal দিয়ে assign এর মত লিখতে হয় না।

  // "type" primitive & non-primitive 2 জায়গায় ব্যবহার করা যায়।
  // “interface” শুধু non-primitive এর ক্ষেত্রে ব্যবহার করা যায়।

  // object এর ক্ষেত্রে interface use করা বেশি preferable. other non-primitive এর জন্য complex syntax

  //------------interface with object---------------------------->

  //   alias
  type User1 = {
    name: string;
    age: number;
  };

  //-----how to extend object property in alias method------------->
  type UserWithRole = User1 & { role: string }; //intersection দিয়ে property extend করা হয়েছে।

  const user1: UserWithRole = {
    name: "Shahin",
    age: 20,
    role: "Admin",
  };

  //interface

  interface User2 {
    name: string;
    age: number;
  }

  //-------how to  extend object property in interface----------------->

  interface UserWithRole2 extends User2 {
    role: string;
  }
  /* চাইলে type ‍alias কে interface মধ্যে দিয়ে extend করা যাবে।  নিচে User1 হলো type alias*/
  //   interface UserWithRole2 extends User1 {
  //     role: string;
  //   }

  const user2: UserWithRole2 = {
    name: "Hossain",
    age: 20,
    role: "admin",
  };

  //--------------------- interface with array---------------------->

  type Roll1 = number[]; //alias type

  //interface type, এখানে ‍ array index type ও number এবং index value ও number বুঝানো হয়েছে।

  interface Roll2 {
    [index: number]: number;
  }

  const roll: Roll2 = [1, 2, 3, 4];

  //------------------Interface with function---------------------->
  type Add = (num1: number, num2: number) => number; // alias type

  //interface
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
