{
  /**
   * ---------------------------->
   *      Polymorphism types
   * ---------------------------->
   */

  // class এর একটি নির্দিষ্ট method অন্য  class এ গিয়ে যদি redesign হয় তাহলে
  // call করার সময় ভিন্ন ভিন্ন আউটপুট পাই, কিন্তু method name same থাকে এটাই হলো polymorphism.

  class Person {
    getSleep() {
      console.log("I'm Sleeping for 8 hours per day");
    }
  }
  class Student extends Person {
    getSleep() {
      console.log("I'm Student Sleeping for 7 hours per day");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("I'm Developer Sleeping for 6 hours per day");
    }
  }

  const getSleepingHours = (params: Person) => {
    params.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  // getSleepingHours(person1); //I'm Sleeping for 8 hours per day
  // getSleepingHours(person2); //I'm Student Sleeping for 7 hours per day
  // getSleepingHours(person3); //I'm Developer Sleeping for 6 hours per day

  // polymorphism এ সকল method গুলো same structure হতে হবে।
  //যদি parent class parameter না নেয় তাহলে, পরের কোনো child class parameter নিতে পারবে না।
  // সে ক্ষেত্রে constructor দিয়ে parameter নিতে হবে।
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  //formula: pi * radius * radius
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  //Rectangle  formula: height * width

  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getAreaResult = (params: Shape) => {
    console.log(params.getArea());
  };

  const area = new Shape();
  const circle = new Circle(20);
  const rectangle = new Rectangle(20, 20);

  getAreaResult(area);
  getAreaResult(circle);
  getAreaResult(rectangle);
  //<--------------------------
}
