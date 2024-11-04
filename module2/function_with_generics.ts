{
  /**
   * ---------------------
   * Function with Generic
   * ---------------------
   */

  //--------------------------->
  // normal function with type
  const createArray = (param: string): string[] => {
    return [param];
  };

  //generic type function ------------>

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const res2 = createArrayWithGeneric<string>("Bangladesh");

  //   type User = { id: number; name: string };
  interface User {
    id: number;
    name: string;
  }
  const res3 = createArrayWithGeneric<User>({
    id: 100,
    name: "Shahin",
  });

  //   Generic Function with Tuple---------------------------->

  const createArrayWithTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
  };

  const res4 = createArrayWithTuple<string, number>("Bangladesh", 101);
  const res5 = createArrayWithTuple<string, { id: number; address: string }>(
    "Shahin",
    {
      id: 25,
      address: "Dhaka",
    }
  );

  //another function

  const addToCourse = <T>(param: T) => {
    const course = "Next Level Web Development";
    return {
      ...param,
      course,
    };
  };
  const res6 = addToCourse<{ name: string; email: string }>({
    name: "Shahin",
    email: "shain@gmail.com",
  });

  const res7 = addToCourse<{ name: string; email: string; hasCar: boolean }>({
    name: "Abdullah",
    email: "abdullah@gmail.com",
    hasCar: true,
  });
  //<--------------------------
}
