{
  /**
   * ---------------------------->
   *      Type Guard/Type Naving with typeof & in
   * ---------------------------->
   */

  //--- type guard with typeof -------------------------->
  // type guard type চেক করে conditional return করে

  type alphaNumeric = string | number;

  const addition = (
    param1: alphaNumeric,
    param2: alphaNumeric
  ): alphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  //   console.log(addition("20", 30));

  // in guard -------------------------------->

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    //এখানে শুধু user এর name suggestion দিবে কারণ NormalUser & AdminUser এর মধ্যে কমন হলো name.
    //typeScript এখানে শুধু বুঝতে পারবে name
    // user. (only name suggestion)

    if ("role" in user) {
      // in guard এর condition এর ভিতরে role এর suggestion পাবে।
      // কারণ শুধু role থাকলেই এই condition true হবে।
      // user. (suggestion -> name & role)
      console.log(`This Is Admin User name ${user.name} and role ${user.role}`);
    } else {
      console.log(`This is Normal User name: ${user.name}`);
    }
  };

  const normalUser = { name: "Md. Shahin Hossain" };
  getUser(normalUser);
  const adminUser = { name: "Nurul Ahsan", role: "admin" };
  getUser(adminUser);

  //<--------------------------
}
