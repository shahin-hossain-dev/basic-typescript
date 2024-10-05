// typeScript সকল variable গুলোকে globally access করছে, তাই অন্য ফাইলেও same variable define করা যাচ্ছে না।
//তাই একটা {} দিয়ে blockscope করে নিবো for learning Purpose
{
  // spared operator
  // rest operator
  // destructuring

  //spared operator with array

  const friend1: string[] = ["ahsan", "faysal", "hasan"];

  const friend2: string[] = ["mohiuddin", "sujan", "sojol"];

  //   friend1.push(friend2) //wrong approach typeScript give an error before go to run time

  friend1.push(...friend2); // right approach with spared operators

  //spread operator with object

  const mentor1: {
    next: string;
    vanilaJs: string;
    react: string;
  } = {
    next: "shahin",
    vanilaJs: "Saiful",
    react: "al-taj",
  };
  const mentor2: {
    dbms: string;
    tailwind: string;
  } = {
    dbms: "ahsan",
    tailwind: "hasan",
  };

  const allMentors = {
    ...mentor1,
    ...mentor2,
  };

  //rest operator

  const greetFriends = (...friends: string[]) => {
    console.log(friends);
    friends.forEach((friend: string) => console.log(friend));
  };

  greetFriends("Shahin", "Ahsan", "Hasan", "Faysal", "Mohiuddin");
}
