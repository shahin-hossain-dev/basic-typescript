{
  /**
   *
   * ---------------------------->
   *      OOP Inheritance
   * ---------------------------->
   */

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(sleepOfHours: number) {
      console.log(`${this.name} sleeps for ${sleepOfHours} Hours.`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address); //super method parent থেকে inherit করে ডাটা নিয়ে আসবে।
    }
  }

  const student1 = new Student("Md. Shahin", 27, "Mirpur, Dhaka");

  //   student1.getSleep(5);

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(
        `${this.designation} ${this.name} takes class ${numberOfClass}`
      );
    }
  }

  const teacher = new Teacher(
    "Shahin",
    27,
    "Mirpur, Dhaka",
    "Assistant Professor"
  );
  teacher.getSleep(5);
  //<--------------------------
}
