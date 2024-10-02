"use strict";
// typeScript সকল variable গুলোকে globally access করছে, তাই অন্য ফাইলেও same variable define করা যাচ্ছে না।
//তাই একটা {} দিয়ে blockscope করে নিবো for learning Purpose
{
    // spared operator
    // rest operator
    // destructuring
    //spared operator with array
    const friend1 = ["ahsan", "faysal", "hasan"];
    const friend2 = ["mohiuddin", "sujan", "sojol"];
    //   friend1.push(friend2) //wrong approach typeScript give an error before go to run time
    friend1.push(...friend2); // right approach with spared operators
    //spread operator with object
    const mentor1 = {
        next: "shahin",
        vanilaJs: "Saiful",
        react: "al-taj",
    };
    const mentor2 = {
        dbms: "ahsan",
        tailwind: "hasan",
    };
    const allMentors = Object.assign(Object.assign({}, mentor1), mentor2);
    //rest operator
    const greetFriends = (...friends) => {
        console.log(friends);
        friends.forEach((friend) => console.log(friend));
    };
    greetFriends("Shahin", "Ahsan", "Hasan", "Faysal", "Mohiuddin");
}
