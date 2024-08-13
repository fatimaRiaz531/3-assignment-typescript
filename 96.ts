
// **Question 96:** Demonstrate how to use the `.reduce()` method to calculate the sum of all numbers in an array.
// **Explain & TIP:** The `.reduce()` method applies a function against an accumulator and each element in the array
//  (from left to right) to reduce it to a single value.

// SOLUTION:

function calculateSum(numbers:number[]): number {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers: number[] = [1+2+3+4+5+6+7];
console.log(calculateSum(numbers));