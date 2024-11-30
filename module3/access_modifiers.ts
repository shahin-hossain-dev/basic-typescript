{
  /**
   * ---------------------------->
   *      Access Modifiers
   * ---------------------------->
   */

  class BankAccount {
    readonly id: number; // এই property কে শুধু read করা যাবে, এডিট করা যাবে না।
    name: string;
    private balance: number; // এই property কে শুধু এই class এর মধ্যে modify করা যাবে। বাইরে থেকে যাবে না।

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
  }

  const person1 = new BankAccount(111, "Shahin", 500);

  // person1.id = 222; // id এইভাবে modify করা ঠিক না তাই id এর  মতো property গুলোকে read only করতে হবে।
  // person1.balance = 0; // balance এইভাবে modify করা ঠিক না তাই এমন property কে private করতে হবে।
  // person1.balance = 0 // property private করার এই ভাবে আর মডিফাই করা যাবে না। class এর method দিয়ে modify করা যাবে।
  console.log(person1);

  //<--------------------------
}
