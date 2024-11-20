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

  //Record type-------------------->

  // type Student = {
  //   name: string;
  //   subject: string;
  // };

  // const student1: Student = {
  //   name: "Shahin",
  //   subject: "Science",
  // };

  //যদি ডায়নামিক ভাবে অবজেক্ট এর মধ্যে property এর টাইপ define করতে চাই তাহলে Record use করতে হবে।

  type Student = Record<string, string>; // এখানে প্রথম string হলো obj property type, পরেরটা হলো value type. property type always string type হয়।

  const student2: Student = {
    name: "Shahin",
    // age: 25, // not allow this object takes only string type
    subject: "Science",
  };

  //যদি যেকোনো ভ্যালু Record type নিবে তাহলে unknown type দিতে হবে।

  const student3: Record<string, unknown> = {
    name: "Shahin",
    age: 25,
    subject: "Science",
  };

  const EmptyObj: Record<string, unknown> = {};

  //<--------------------------
}
