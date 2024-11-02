{
  // Ternary Operator | Optional Chaining | Nullish coalescing

  const age: number = 18;

  if (age >= 18) {
    console.log("Adult ");
  } else {
    console.log("Not Adult");
  }

  //   ternary operator
  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log({ isAdult });
}
