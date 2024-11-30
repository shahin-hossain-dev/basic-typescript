{
  /**
   * ---------------------------->
   *      instanceof type guard / type narrowing
   * ---------------------------->
   */

  // parent class

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`This ${this.species} name ${this.name} makes sound`);
    }
  }

  //child class
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`${this.species} makes bark`);
    }
  }
  //child class
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log(`${this.species} makes Meaw`);
    }
  }

  const dog = new Dog("German Shepherd", "Dog");
  const cat = new Cat("Meaw Cat", "Cat");

  // const getAnimal = (animal: Animal) => {
  //   // সাধারণ ভাবে Animal class থেকে শুধু Animal এর type গুলো পাবে।
  //   //যদি instanceof দিয়ে অন্য class add করা হয় তাহলে অন্য ক্লাসের instance/property ও পাবে।
  //   if (animal instanceof Dog) {
  //     animal.makeBark();
  //   } else if (animal instanceof Cat) {
  //     animal.makeMeaw();
  //   } else {
  //     animal.makeSound();
  //   }
  // };

  // handle smart way instanceof------------->

  // অনেক সময় শুধু true return করলে if condition বুঝেতে পারে না animal এর মধ্যে কি কি  instance আছে।
  // তাই animal is Dog (extends Class) return type add করে দিতে হবে।

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog; //return true/false
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat; //return true/false
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      // এখানে animal এর মধ্যে Dog er instance গুলো পাবে।
      animal.makeBark();
    } else if (isCat(animal)) {
      // এখানে animal এর মধ্যে Cat er instance গুলো পাবে।
      animal.makeMeaw();
    } else {
      // এখানে animal মধ্যে শুধু Animal er instance গুলো পাবে।
      animal.makeSound();
    }
  };

  // getAnimal(dog);
  // getAnimal(cat);

  //<--------------------------
}
