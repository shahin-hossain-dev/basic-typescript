{
  // Type Alias
  // type alias হলো আলাদা জায়গায় varialbe এর মধ্যে type declare করে, ঐ টাইপ same ধরণের বিভিন্ন variable এ ব্যবহার করতে পারি বা reuse করতে পারি। এতে করে প্রতিটি variable এ আলাদা করে type delclare করতে হয় না।

  type Student = {
    // type এর variable name capital letter এ start করা হলো convention
    name: string;
    age: number;
    gender: string;
    address: string;
    contactNo?: string; //contactNo optional, এই property থাকলে string হবে নইলে error দিবে না।
  };

  //   const student1: {
  //     name: string;
  //     age: number;
  //     gender: string;
  //     contactNo: string;
  //     address: string;
  //   } = {
  //     name: "Shahin Hosaain",
  //     age: 27,
  //     gender: "Male",
  //     address: "Mirpur, Dhaka",
  //     contactNo: "01676446077",
  //   };
  const student1: Student = {
    name: "Shahin",
    age: 27,
    gender: "Male",
    address: "Mirpur, Dhaka",
    contactNo: "01676446077",
  };

  const student2: Student = {
    name: "Nurul Ahsan",
    age: 27,
    gender: "Male",
    address: "Mirpur, Dhaka",
  };

  const student3: Student = {
    name: "Hasan",
    age: 25,
    gender: "Male",
    address: "Mirpur, Dhaka",
    contactNo: "0160000000",
  };

  type UserName = string;
  type IsAdmin = boolean;
  //   type Add = (num1: number, num2: number) => number; // function alias
  type Add = (a: number, b: number) => number;

  const userName: UserName = "Shahin Hossain"; //single string এ type alias
  const isAdmin: IsAdmin = false;
  const add: Add = (num1, num2) => num1 + num2;

  // Type Alias
}
