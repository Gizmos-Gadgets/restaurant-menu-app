const menu = [
    //Appetizers
    {name: "Potstickers", category: "Appetizers", price: 8.50},    
    { name: "Dumplings", category: "Appetizers", price: 7.00},
    { name: "Wantons", category: "Appetizers", price: 7.25 },
    { name: "Crab Rangoon", category: "Appetizers", price: 11.00 },
    //Sushi
    { name: "Lucky Bug Roll", category: "Sushi", price: 8.50 },
    { name: "Broken Elbow Roll", category: "Sushi", price: 8.50 },
    { name: "Dishonor-On-Ya-Cow Roll", category: "Sushi", price: 8.50 },
    { name: "Lets Get Down to Business Roll", category: "Sushi", price: 8.50 },
    //Sashimi
    { name: "Tuna", category: "Sashimi", price: 9.25 },
    { name: "Salmon", category: "Sashimi", price: 10.75 },
    { name: "Masago", category: "Sashimi", price: 7.25 },
    { name: "Toro", category: "Sashimi", price: 9.00 },
    //Fried Rice
    { name: "Chicken", category: "Fried Rice", price: 7.50 },
    { name: "Shrimp", category: "Fried Rice", price: 8.50 },
    { name: "Plain", category: "Fried Rice", price: 7.00 }
]

// for(let i=0; i<menu.length; i++){
//     console.log(menu[i]);
// }

menu.forEach(function(menu){
    console.log(menu.name);
})

