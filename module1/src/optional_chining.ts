{
  // optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      permanentAddress?: string;
      presentAddress: string;
    };
  };

  const user: User = {
    name: "Shahin",
    address: {
      city: "Dhaka",
      road: "15/2",
      presentAddress: "Mirpur, Dhaka",
    },
  };

  // permanent Address undefined হলে default ভাবে "No Permanent Address" সেট করে দেয়া হয়েছে nullish coalescing operator use করা হয়েছে।
  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  //   console.log({ permanentAddress });// { permanentAddress: 'No Permanent Address' }
}
