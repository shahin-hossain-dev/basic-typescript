{
  // intersection type
  // intersection type কে (&&) দিয়ে নির্দেশ করে, এখানে দুইটা বা তারঅধিক type মিলে একটা টাইপ তৈরী হবে, এবং  নতুন object অন্য type variable এ সবগুলো টাইপ এর Value থাকতে হবে।

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const developer: FullStackDeveloper = {
    skills: ["HTML", "CSS", "React", "Express", "Node Js"], // ‍এটা কমন।
    //frontend & backend 2ta designation ই থাকতে হবে।
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
  //   console.log(developer);
}
