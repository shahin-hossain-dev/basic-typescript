{
  // Type Assertion / type Narrowing
  // প্রথমে যদি any type দিয়ে আমরা যদি পরে বুঝতে পারি variable অন্য type হবে তাহলে আমরা type assertion করে বলে দিতে পারি কোন type হবে।
  // তাহলে সে অনুযায়ী variable এর পরে dot দিলে type অনুযায়ী method suggest করবে । এবং variable এর type assign হবে।
  let anything: any;

  anything = "Next Level Web Dev";
  anything = 500;

  (anything as number).toFixed(); //type assertion

  //another example
  //gramToKG function return string | number | undefined ৩ টাইপের ভ্যালু
  const gramToKG = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertValue = parseFloat(value) * 1000;
      return `The value is: ${convertValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  // gramToKG function 3টা টাইপের ভ্যালু return করতে পারে কিন্তু নিচের result variable গুলো শুধু এক ধরনের type হবে, এটাই type assertion.

  let result = gramToKG(1000) as number; // এখানে result এর value specific করা হয়েছে।
  const result1 = gramToKG("1000") as string; //এখানে result এর value specific করা হয়েছে।

  // example with try-catch

  type ErrorMessage = {
    message: string;
  };

  try {
  } catch (error) {
    // error message এর type আমরা fixed করে দিলাম, এটা string type এর হবে।
    console.log((error as ErrorMessage).message);
  }

  //
}
