{
  //--------------->
  /**
   * ------------------------------
   *          generic types
   * ------------------------------
   */

  type RollNumbers = number[];
  type Friends = string[];
  type BoolArray = boolean[];

  //generic type একটা param নিবে তার মাধ্যমে dynamic ভাবে value pass করা যাবে। industry standard হলো param কে T (type) লিখা।
  //generic type for array;
  type GenericType<T> = Array<T>;

  //   const rollNumbers: RollNumbers = [1, 2, 3, 4, 5, 6, 7];
  //   const rollNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7];
  const rollNumbers: GenericType<number> = [1, 2, 3, 4, 5, 6, 7];

  //   const friends: Friends = ["Nurul Ahsan", "Mohiuddin", "Faysal"];
  //   const friends: Array<string> = ["Nurul Ahsan", "Mohiuddin", "Faysal"];
  const friends: GenericType<string> = ["Nurul Ahsan", "Mohiuddin", "Faysal"];

  //   const boolArray: BoolArray = [true, false, true, true];
  //   const boolArray: Array<boolean> = [true, false, true, true];
  const boolArray: GenericType<boolean> = [true, false, true, true];

  const add = (n1: number, n2: number): number => n1 + n2;

  //   Generic type for Object --------------------------->

  const users: GenericType<{ name: string; age: number }> = [
    {
      name: "shahin",
      age: 25,
    },
    {
      name: "Ahsan",
      age: 24,
    },
  ];
  // --> type alias
  // type UserTypes = {
  //   name: string;
  //   age: number;
  // };
  //--> interface type
  interface UserType {
    name: string;
    age: number;
  }
  const users1: GenericType<UserType> = [
    {
      name: "shahin",
      age: 25,
    },
    {
      name: "Ahsan",
      age: 24,
    },
  ];

  //generic tuple------------------------------------->>

  //  generic tuple এখানে ২টা params নিচ্ছে এবং dynamic ভাবে value নিচ্ছে।

  type GenericTuple<X, Y> = [X, Y];

  const couple: GenericTuple<string, string> = ["Shahin Hossain", "Jui Akter"];

  const userWithId: GenericTuple<number, { name: string; age: number }> = [
    12,
    { name: "Shahin", age: 27 },
  ];

  // <----------------
}
