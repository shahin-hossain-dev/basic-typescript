{
  //Union type // union type হলো  value আকারে  একাধিক type declare করে দেয়া যা অন্য কোথাও variable apply করতে গেলে type এর মধ্য থেকে যেকোনো একটা value use করতে পারবে। অন্যথার error দিবে।

  // union type এর value গুলো (|) দ্বারা আলাদা করা হয়।
  type FrontendDeveloper = "BadDeveloper" | "GoodDeveloper"; // এটা হলো string literal type
  type BackendDeveloper = "Exprees Developer" | "Nest Developer";

  //   const frontendDeveloper: FrontendDeveloper = "BetterDeveloper"; //give error:  কারণ type হিসাবে BetterDeveloper use করা হয়নি।
  const frontendDeveloper: FrontendDeveloper = "GoodDeveloper"; // true

  type fullStackDeveloper = FrontendDeveloper | BackendDeveloper; // এখানে দুইটা টাইপকে একটা টাইপের মধ্যে Assign করা হয়েছে।

  type User = {
    name: string;
    email?: string;
    age: number;
    gender: "Male" | "Female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  const user: User = {
    name: "Shahin",
    age: 27,
    gender: "Male",
    bloodGroup: "A+",
  };

  //
}
