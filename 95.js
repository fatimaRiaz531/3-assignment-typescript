// **Question 95:** Write a function that uses the `.filter()` method to return an array of numbers greater than 10.
// **Explain & TIP:** The `.filter()` method creates a new array with all elements that pass the test implemented
//  by the provided function.
// SOLUTION:
// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
const numbers = [5, 10, 15, 20, 25, 30, 45];
console.log(filterGreaterThanTen(numbers));
export {};
