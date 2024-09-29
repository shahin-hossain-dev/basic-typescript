# Basic Instruction
  
- Node js TypeScript code সরাসরি বুঝতে পারে না। TypeScript এর কমপাইলার বা ট্রান্সপাইলারে দিয়ে TypeScript code কে compile করে js code রুপান্তর করতে হয়।
- type file compile করার জন্য terminal এ cmd করতে হয় `tsc` (TypeScript Compiler)
- compile করলে নতুন একটা ফাইল Create হবে। .js দিয়ে। সেটা মুলতো node js বুঝতে পারবে।
- কিন্তু JS & TS same name এর দুইটা file একই Folder এ রাখা যাবে না। এদের কে আলাদা করে রাখতে হবে। নইলে ts ফাইলে fake error দিবে। যে সেম Folder এ একই variable 2 বার ডিফাইন করা হয়েছে। এবং ফাইল গুলো organize ও থাকে না।
- এই সমস্যা সমাধানের জন্য  ts থেকে compile হওয়া js file গুলো  অন্য একটা folder এ task file/compiled file গুলোকে রাখতে হবে। আর এটা করার জন্য TS কে configure করে নিতে হবে।
- configure করার জন্য  **`tsc --init` command** করতে হবে তাহলে একটা ts এর ****configure ফাইল তৈরী হবে।
- এর ****configure ফাইল এর মধ্যে      `"rootDir": "./",`  নামে যে property আছে তার মধ্যে ts file গুলো রাখে অন্য জায়াগায় js file গুলো রাখার জন্য ts file location add করে দিতে হবে।     `"rootDir": "./module1/src/",`
- এবং compiled js file গুলো আলাদা ফোল্ডারে রাখার জন্য   `"outDir": "./",` নামের property এর মধ্যে লোকশন বলে দিতে হবে, আমি কোথায় ফাইল গুলো রাখতে চাই।  `"outDir": "./module1/dist",`
- এর জন্য শুধু `tsc` লিখে `cmd` করতে হবে। তাহলে একটা dist (distributed) file এর মধ্যে js file গুলো থাকবে।
- ts কে js এর বিভিন্ন version এ convert করার জন্য config> `"target": "es2016",`  target এর মধ্যে বিভিন্ন version কে value হিসাবে দিলে সেই varsion এর js file পাওয়া যাবে।
