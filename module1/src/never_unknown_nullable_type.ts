{
  //nullable type

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };

  //   searchName(null);

  // unknown type
  // unknown type হলো runtime এর সময় type চেক করবে  এর জন্য assign করা হয়।
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const convertValue = value.split(" ")[0];
      const convertSpeed = (parseFloat(convertValue) * 1000) / 3600;
      console.log(`The Speed is ${convertSpeed}`);
    } else {
      console.log("Wrong input");
    }
  };

  getSpeedInMeterPerSecond(null);

  // never type------------------------->
  //   যেহেতু throwError function কখনও কিছু return করবে না, এর জন্য এটা never type দেয়াে হয়েছে।

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  //   throwError("Never Error Message");

  //
}
