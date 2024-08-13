// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// Explain & TIP: You can check for the presence of a key in a Map with the .has() 
// method and retrieve its value with the .get() method.
// SOLUTION:
// Creates a new Map to store countries and their capitals
const countries = new Map();
countries.set("USA", "Washington , D.C.");
countries.set("France", "Paris");
countries.set("Pakistan", "Peshawar");
console.log(countries);
// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log('Canada is not in the Map.');
    }
}
logCapitalOfCanada(countries);
export {};
