{
  /**
   *
   * ---------------------------->
   *      Abstraction
   * ---------------------------->
   * Abstraction কী?
   * সাধারণত এটা হলো যেই class বা interface abstraction হবে সেখানে শুধু method & property declare
   * করা থাকবে কিন্তু Implementation হবে না। implementation হবে child class এ বা যেই class implement করা হবে।
   * এবং abstraction class দিয়ে কোনো instance তৈরী করা যাবে না।
   *
   * সুতরাং abstraction হলো, implementation কী হবে সেটার একটা idea পাওয়া যাবে কিন্তু implement হবে child class এ।
   *
   * abstraction ২ ভাবে করা যায়
   * 1. interface use করে
   * 2. class এর মধ্যে abstract keyword use করে।
   *
   */

  // object এবং class এ কিভাবে interface use করতে হয়------------------------>

  //void type হলো function এর কোনো value return করবে না। এই type নির্দেশ করে।
  interface Vehicle {
    name: string;
    model: number;
    startEngine(): void;
  }

  // object এর ক্ষেত্রে interface (:) clone দিয়ে ব্যবহার করতে হয়।
  const car: Vehicle = {
    name: "Ferrari",
    model: 2000,
    startEngine() {
      console.log("Kick Off the car engine");
    },
  };

  // object এর ক্ষেত্রে interface (implements) keyword দিয়ে ব্যবহার করতে হয়।
  class Car implements Vehicle {
    name = "ferrari";
    model = 2000;
    startEngine(): void {
      console.log("Kick off the car engine");
    }
  }

  // ‍abstraction with interface ------------------------------->

  //void হলো function এর কোনো value return করবে না। এই type নির্দেশ করে।

  // idea: এখান থেকে শুধু idea নেয়া যায় এখানে কি হবে কিন্তু কোনো implementation নেই।
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  //real implementation: interface কে ‍add করে এই class এর মধ্যে method গুলো implement করা হচ্ছে।
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am Starting the car Engine");
    }
    stopEngine(): void {
      console.log("I am Stopping the car Engine");
    }
    move(): void {
      console.log("I am Moving the Car");
    }
    test() {
      console.log("Any thing I am doing Here");
    }
  }

  // const ferrari = new Car1();
  // ferrari.startEngine();

  // abstraction with class & abstract keyword --------------------------------------->

  // idea: এখান থেকে শুধু idea নেয়া যায় এখানে কি হবে কিন্তু কোনো implementation নেই।
  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    // test method যেহেতু abstract না তাই এটা inherited ভাবে child class এ পেয়ে যাবে।
    test() {
      console.log("I'm just Testing the Car2");
    }
  }

  //real implementation: interface কে ‍add করে এই class এর মধ্যে method গুলো implement করা হচ্ছে।

  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log("I'm Starting the Car2 Engine");
    }
    stopEngine(): void {
      console.log("I'm Stopping the Car2 Engine");
    }
    move(): void {
      console.log("I'm moving the Car2");
    }
  }

  const toyotaCar = new Car2();

  toyotaCar.startEngine();
  toyotaCar.stopEngine();
  toyotaCar.test();

  //<--------------
}
