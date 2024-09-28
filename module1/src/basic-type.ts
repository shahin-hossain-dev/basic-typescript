//basic data type

// যদি কোনো type define করা না হয় ts auto নিয়ে নেয় এটাকে বলে implicit type;

// const fullName = 'Shahin Hossain'; //implicit type
// const fullName: string = 'Shahin Hossain'; //explicit type


/*----------------------------------
 primitive data type
------------------------------------*/
//string
const firstName: string  = 'Shahin';

//number
const age: number = 27;

//boolean
const isAdmin: boolean = true;

//undefined 
const x:undefined = undefined;

//null
const y:null = null;

//any type
let z; // যদি type define করা না হয় তাহলে এটা ‍any type হবে, এখানে যেকোন type value বসানো যাবে। ‍any type বসানো উচিৎ না

z = 'any type';

let a: any = 'any type';

/*----------------------------------
 reference/ non-primitive data type
------------------------------------*/
//Array

const friends : string[] = ['Faysal, Ahsan, Sujan, Mohiuddin'];

 //friends.push(1); // string এর মধ্যে number  push করলে TS error দিবে।

const ages: number[] = [27, 26, 30, 29]; 

//ages.push('30'); //// number এর মধ্যে string  push করলে TS error দিবে।

// Tuple 

//Tuple --> special array --> order maintain করে --> type of value থাকে
// tuple হলো একটি special array
// যেখানে নির্দিষ্ট করে দেয়া কিছু type এর value রাখতে পারে।
// ডিফাইন করে দিতে হয় কোন index এর ভ্যালু কোন type এর হবে।
// যে কয়টা টাইপ বলে দেয়া থাকবে সেই কয়টা value array তে বসানো যাবে। 

const coordinates: [number, number] = [1, 5];

const user: [number, string, boolean] = [26, 'Shahin', true];