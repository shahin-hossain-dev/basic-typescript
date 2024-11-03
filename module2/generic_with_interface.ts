{
  //------------------------>
  /**
   * ---------------------------
   * Generic type with interface
   * ---------------------------
   */

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseDate: string;
    };
    smartWatch: T; //এখানে T হলো dynamic ভাবে type নিবে।
    bike?: X;
  }
  //dynamic generic type 1
  interface HuaweiWatch {
    brand: string;
    model: string;
    display: string;
  }
  const poorDeveloper: Developer<HuaweiWatch> = {
    name: "Shahin",
    computer: {
      brand: "Dell",
      model: "1525",
      releaseDate: "20-09-24",
    },
    smartWatch: {
      brand: "Huawei",
      model: "3215",
      display: "OLED",
    },
  };
  //dynamic generic type 2
  interface AppleWatch {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface Bike {
    brand: string;
    model: string;
    engine: string;
  }
  const richDeveloper: Developer<AppleWatch, Bike> = {
    name: "Mohiuddin",
    computer: {
      brand: "Dell",
      model: "1525",
      releaseDate: "20-09-24",
    },
    smartWatch: {
      brand: "Apple",
      model: "3215",
      display: "Super OLED",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Yamaha",
      model: "R15",
      engine: "100CC",
    },
  };

  console.log(richDeveloper);
  //<------------------------
}
