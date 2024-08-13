// 🚀 Day 35 Challenge: Start Coding! 🚀
// Question 103: Write a function that returns a random boolean value, true or false.
// Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() 
// and check if it's above or below 0.5 to decide between true or false.
// SOLUTION:
function getRandomBoolean() {
    return Math.random() > 0.5;
}
console.log(getRandomBoolean());
export {};
