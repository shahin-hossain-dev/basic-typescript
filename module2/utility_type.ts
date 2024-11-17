{
  /**
   *
   * ---------------------------->
   *      Utility types
   * ---------------------------->
   *
   */

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  //Pick -> অন্য টাইপ থেকে যেকোনো প্রপাটি নিয়ে নতুন টাইপ তৈরী করার জন্য ব্যবহার করা হয়।
  type NameAndAge = Pick<Person, "name" | "age">;

  //Omit -> অন্য টাইপ থেকে যেকোনো প্রপাটি বাদ দিয়ে বাকি প্রপাটি নিয়ে নতুন করে টাইপ তৈরী করতে ব্যবহার করা হয়।

  type ContractInfo = Omit<Person, "name" | "age">;

  //Required -> অন্য টাইপের মধ্যে optional থাকলেও ্  ঐ প্রপাটি নিয়ে Required করে নতুন টাইপ তৈরী করা যায়।

  type RequiredPerson = Required<Person>;

  //Partial -> এটা required এর বিপরীত

  type PartialPerson = Partial<Person>;

  //Readonly -> এটা ব্যবহারা করলে অবজেক্ট  এ চেন্জ করা যায় না। শুধু only read করা যাবে।

  type ReadonlyPerson = Readonly<Person>;

  const person1: ReadonlyPerson = {
    name: "Shahin",
    age: 20,
    contactNo: "017",
  };

  //   person1.name = "abdullah"; //give an error

  //<--------------------------
}
