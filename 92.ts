
// **Question 92:** Write a function to remove the last element from an array and return the removed element.
// **Explain & TIP:** The `.pop()` method removes the last element from an array and returns that element.
//  This can be useful when you need to work with the removed item.

// // SOLUTION:
function removeLastElement<T>(arr:T[]): T | undefined {
  return arr.pop();
}
const fruits: string[] = ["Apple", "Banana","Orange"];
console.log(removeLastElement(fruits));
console.log(fruits);