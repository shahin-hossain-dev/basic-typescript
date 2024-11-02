{
  //nullish coalescing Operator
  // null অথবা undefined উপর ভিত্তি করে কোনো একটা ডিসিশন মেকিং করতে হয়।
  // value যদি null অথবা undefined তাহলে nullish coalescing Operator ব্যবহার করে default একটা value সেট করার জন্য ব্যবহার করা হয়।
  // nullish coalescing operator কে (??) দ্বারা নির্দেশ করা হয়।

  const isAuthenticated = undefined;

  const result1 = isAuthenticated ?? "Guest"; // value null/undefined হলে 'Guest' Return করবে। অন্যথায় value return করবে।

  // difference between ternary Operator & nullish coalescing Operator
  // nullish coalescing Operator null/undefined এর বাইরে গেলেই যেকোনো value return করবে, truthy বা falsy হোক।
  //specific truthy/falsy value check করে না।
  const isAuthorized = null;
  const result2 = isAuthorized ?? "user"; //result "user"
  const isAuth = "";
  const result3 = isAuth ?? "user"; //result: ""

  //   ternary operator
  //  ternary operator যেকোনো ধরণের truthy & falsy value চেক করে। not specific null/undefined
  const isTruthy = null;
  const result4 = isTruthy ? "Truthy" : "Falsy"; //Falsy
  const isAuth2 = "";
  const result5 = isAuth2 ? isAuth2 : "Falsy"; // Falsy
}
