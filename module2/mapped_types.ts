{
  /**
   * ---------------------------->
   *      Mapped types
   * ---------------------------->
   *
   * mapped type হলো type এর মধ্যে অনেক গুলো প্রপাটিকে একসাথে এক টাইপ থেকে অন্য টাইপে রুপান্তর করা।
   *
   */

  const numbers: number[] = [1, 2, 3, 4];
  //normal map works in js
  const arrOfString: string[] = numbers.map((num) => num.toString());
  //   console.log(arrOfString);

  // mapped types

  type AreaTypeNumber = {
    height: number;
    width: number;
  };

  //AreaTypeNumber(number) কে যদি  অন্য টাইপে convert করতে চাই।
  // with hardcore property define, যদি অনেক প্রপাটি হয় তাহলে আলাদা আলাদা করে লিখতে হবে।

  /*   type AreaTypeString = {
    [key in "height" | "width"]: string;
  }; */

  //dynamically property define, keyof operator use করে dynamic ভাবে সব define করে দেয়া যায়।
  type AreaTypeBool = {
    [key in keyof AreaTypeNumber]: boolean;
  };

  //look up type------------------>

  type Height = AreaTypeNumber["height"]; // look up from AreaTypeNumber height type // type->number

  type AreaTypeString = {
    height: string;
    width: string;
  };

  //flexible dynamic mapped type------------------------------------>

  // এখানে in হলো লুপ করে key হলো লুপিং variable
  // T => { height: string; width: number }
  // key => T["height"] // look up এর মত কাজ হবে এবং loop হতে থাকবে।

  type AreaTypeAny<T> = {
    [key in keyof T]: T[key];
  };

  const areaDynamic: AreaTypeAny<{ height: string; width: number }> = {
    height: "200",
    width: 200,
  };
  //<--------------------------
}
