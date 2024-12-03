{
  /**
   *
   * ---------------------------->
   *      Statics in oop
   * ---------------------------->
   *
   */

  class Counter {
    // //dynamic property & methods
    // count: number = 0;

    // increment() {
    //   return (this.count = this.count + 1);
    // }
    // decrement() {
    //   return (this.count = this.count - 1);
    // }

    //static property & method
    // eikhane property static rekheo method gulo dynamic use kora jay.
    //static er jonno surute "static" keywoard use korte hobe
    static count: number = 0;

    static increment() {
      return (Counter.count = Counter.count + 1); // "static" use korle this use kora jabe na Class Name Use korte hobe.
    }
    decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  // eikhane counter1 & counter2 2ta instance e different memory allocate korbe, ata holo class er dynamic behavior.
  // but "static" mark kore dile sokol Counter er sokol instance ak jaygay memory allocate korbe ata holo static behavior.
  //dynamic behavior ------------>
  //   const counter1 = new Counter();
  //   console.log(counter1.increment()); // different memory nibe

  //   const counter2 = new Counter();
  //   console.log(counter2.increment()); // different memory nibe

  // static property & dynamic method behavior ---------------->
  // sob value same memory te allocated hobe, different instance eo same jaygay memory allocated hobe.
  //   const counter1 = new Counter();
  //   console.log(counter1.increment());
  //   const counter2 = new Counter();
  //   console.log(counter2.increment());

  // Static Property & Static Method------------------->
  // method static hole Class Dhore method call dite hobe.
  const counter1 = Counter.increment(); //set in same location
  const counter2 = Counter.increment(); //set in same location
  const counter3 = Counter.increment(); //set in same location
  console.log(counter1);
  console.log(counter2);
  console.log(counter3);

  //<--------------------------
}
