// users array with user objects
const users = [
    { name: 'Divyansh', age: 19 },
    { name: 'Sakshi', age: 20 },
    { name: 'Divya', age: 30 },
    { name: 'Jay', age: 27 }
];

// Sorting users based on age
let sortedUsers = users.sort(function(a, b) {
    return a.age - b.age; // ascending order
});

// Logging the sorted users array
console.log(sortedUsers);

// Importing node-fetch to enable fetch functionality in Node.js
const fetch = require('node-fetch');

// Fetching data from the Random User API
fetch('https://randomuser.me/api/')
    .then(function(response) {
        // Parse the response to JSON
        return response.json();
    })
    .then(function(data) {
        // Log the data after it's received
        console.log("Data received:", data);
    })
    .catch(function(error) {
        // Catch and log any errors that occur during the fetch
        console.log("Error occurred:", error);
    });

// This line is executed immediately, before the fetch completes
console.log("This runs immediately");

// fetch('https://randomuser.me/api/')
// .then(functon (){
//     console.log("aane ke baad");
// })
// console.log("turant");

async function abcd(){
    let data = await fetch('https://randomuser.me/api/');
    let real = await data.json();
    console.log(real);
}
abcd();

// ek array hai usmein se saare 100 rupay ke neeche ke products hataado

// Products ka array
const products = [
    { name: 'Pen', price: 20 },
    { name: 'Notebook', price: 50 },
    { name: 'Bag', price: 200 },
    { name: 'Shoes', price: 150 },
    { name: 'Pencil', price: 10 },
];

// 100 rupaye se kam ke products ko filter karna
let newpr = products.filter(function(item) {
    return item.price < 100;
});

// Filtered products ko console pe print karna
console.log(newpr);

// 100 rupaye ke neeche ke products ko filter karna
const filteredProducts = products.filter(function(product) {
    return product.price >= 100;
});

// Filtered products ko console pe print karna
console.log(filteredProducts);

const fileredAndSortedProducts = products
.filter(product => product.price >= 100)
.sort((a, b) => a.price - b.price);
// Filtered and sorted products ko console pe print karna
console.log(fileredAndSortedProducts);

//server ->
// ek computer hai jismein internet available hai and wo system ko progrom kiya gaya hai aise ki wo kisi ki request accept kar paaye and response bhej paaye 

// nodejs accepts your code and converts to cpp and then creates the server environment 
// node js
// internet
// http
// https
// lan
// mac address and ip address
