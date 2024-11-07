{
  /**
   * ----------------------------
   * Constraints
   * ----------------------
   */

  // constraint হলো function এর মধ্যে extends করে required type বলে দেয়া, যেটা এই Function call করতে গেলে type ‍এবং property গুলো অবশ্যই পাস করতে হবে।

  const createNewStudent = <
    T extends { id: number; name: string; email: string }
  >(
    stuInfo: T
  ) => {
    const course = "Next Level Web Development Course";
    return {
      ...stuInfo,
      course,
    };
  };

  const student1 = createNewStudent({
    id: 22,
    name: "Shahin",
    email: "s@gmail.com",
    isMarried: true,
  });

  const student2 = createNewStudent({
    id: 3,
    name: "Abdullah",
    email: "a@gmail.com",
    class: 5,
  });

  //<---------------------
}
