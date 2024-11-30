{
  /**
   * ---------------------------->
   *      Access Modifiers
   * ---------------------------->
   */

  class BankAccount {
    public readonly id: number; // এই property কে শুধু read করা যাবে, এডিট করা যাবে না।
    public name: string;
    // private _balance: number; // এই property কে শুধু এই class এর মধ্যে modify/access করা যাবে। class er বাইরে থেকে যাবে না। child class thekeo access pabe na.
    // private property te _(under squre ) use kora convention
    protected _balance: number; // protected property gulo class er moddhe access pabe & child class thekeo access pabe

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  const person1 = new BankAccount(111, "Shahin", 500);

  // person1.id = 222; // id এইভাবে modify করা ঠিক না তাই id এর  মতো property গুলোকে read only করতে হবে।
  // person1.balance = 0; // balance এইভাবে modify করা ঠিক না তাই এমন property কে private করতে হবে।
  // person1.balance = 0 // property private করার এই ভাবে আর মডিফাই করা যাবে না। class এর method দিয়ে modify করা যাবে।

  person1.addDeposit(500); // method diye private property modify kora jabe;

  // console.log(person1.balance) // property private thakle class er baire theke access kora jabe na. access er jonno method use korte hobe.

  const myBalance = person1.getBalance(); // method diye private property value get korte hobe.
  console.log(myBalance);

  class StudentAccount extends BankAccount {
    constructor(id: number, name: string, balance: number) {
      super(id, name, balance);
    }

    studentBonus() {
      this._balance = this._balance + 500; //_balance property protected houar jonno StudentAccount Class e Access peyese, private hole peto na.
    }
  }

  const student1 = new StudentAccount(2, "shahin", 500);

  console.log(student1.studentBonus());

  //<--------------------------
}
