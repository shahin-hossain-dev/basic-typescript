{
  /**
   *
   * ---------------------------->
   *      OOP Class
   * ---------------------------->
   *
   */

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    //parameter property
    // ts এ parameter property দিলে class property identifier define করবে এবং constructor এর ভিতরেও initialized করে দিবে।

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shephar", "dog", "Ghew Ghew");
  const cat = new Animal("American Cat", "cat", "Meaw Meaw");
  dog.makeSound();

  //   console.log(cat);

  //<--------------------------
}
