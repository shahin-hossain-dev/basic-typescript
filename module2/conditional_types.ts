{
  /**
   * ---------------------------->
   *  Conditional types
   * ---------------------------->
   * -> একটা টাইপ যখন আরেকটা টাইপের উপর নির্ভর করে তখন সেটা conditional type হয়।
   *
   */

  type a1 = null;
  type b1 = undefined;

  type x = a1 extends null ? true : false; // if a1 = null then result true otherwise false;
  type y = a1 extends string ? true : b1 extends undefined ? undefined : any;

  //   ---------------
  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  //   type checkItems<T> = T extends "bike" | "car" | "ship" ? true : false;
  type checkItems<T> = T extends keyof Sheikh ? true : false;

  type hasBike = checkItems<"bike">; //true
  type hasPlane = checkItems<"plane">; //false

  //<-----------------------------
}
