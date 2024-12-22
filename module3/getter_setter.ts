{
  /**
   * ---------------------------->
   *      Getter and Setter
   * ---------------------------->
   */

  class BankAccount {
    public readonly id: number; // এই property কে শুধু read করা যাবে, এডিট করা যাবে না।
    public name: string;
    // private _balance: number; // এই property কে শুধু এই class এর মধ্যে modify/access করা যাবে। class er বাইরে থেকে যাবে না। child class thekeo access pabe na.
    // private property te _(under squire ) use kora convention
    protected _balance: number; // protected property gulo class er moddhe access pabe & child class thekeo access pabe

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // *** setter
    //  set modifier diye method define korle property er moto kore set kora jabe. function call korte hobe na.
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // *** getter

    // getBalance() {
    //   return this._balance;
    // }

    // get moddher value get korar jonno method er moto function call korte hobe na.
    get balance() {
      return this._balance;
    }
  }

  const person1 = new BankAccount(111, "Shahin", 500);

  // person1.id = 222; // id এইভাবে modify করা ঠিক না তাই id এর  মতো property গুলোকে read only করতে হবে।
  // person1.balance = 0; // balance এইভাবে modify করা ঠিক না তাই এমন property কে private করতে হবে।
  // person1.balance = 0 // property private করার এই ভাবে আর মডিফাই করা যাবে না। class এর method দিয়ে modify করা যাবে।

  // person1.addDeposit(500); // method diye private property modify kora jabe;

  // console.log(person1.balance) // property private thakle class er baire theke access kora jabe na. access er jonno method use korte hobe.

  person1.deposit = 500; //***  set modifier diye method define korle property er moto kore set kora jabe. function call korte hobe na.

  // const myBalance = person1.getBalance(); // method diye private property value get korte hobe.

  const myBalance = person1.balance; //*** function er moto kaj korbe but function all korte hobe na. property er moto use kora jabe.

  console.log(myBalance);
  //<--------------------------
}
