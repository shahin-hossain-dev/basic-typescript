// Reference Type -> object


const employee : {
    //company: 'Advanced Information System'; //literal type  -> type এর মধ্যে যে value বলে দেয়া হবে ঠিক সেটাই object value তে থাকতে হবে।
    readonly company: string; //এটাকে বলে access modifier  // এই property কে readonly করার পরে মডিফাইও করা যাবে না।  
    firstName: string; 
    middleName?: string; //(?:) optional type -> object value  থাকলে string হবে না থাকলে undefined হবে।
    lastName: string;
    isMarried: boolean;
    age: number;
} = {
    company: 'Advanced Information System',
    firstName: 'Mohammad',
    // middleName: 'Shahin',
    lastName: 'Hossain', 
    isMarried: true,
    age: 27
}

// employee.company = 'AIS' //not changeable