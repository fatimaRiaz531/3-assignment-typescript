// **Question 93:** Find the index of "Banana" in an array of fruits and replace it with "Mango".
// **Explain & TIP:** To replace an item in an array, find its index using `.indexOf()`, 
// then use that index to set a new value with array bracket notation.
// SOLUTION:
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
const fruits = ["Apple", "Banana", "Kiwi"];
replaceBananaWithMango(fruits);
console.log(fruits);
export {};
