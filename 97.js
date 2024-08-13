// 🚀 **Day 33 Challenge: Start Coding!** 🚀
// **Question 97:** Write a function that returns the current date in the format "DD-MM-YYYY".
// **Explain & TIP:** Working with dates in JavaScript often requires formatting them in a specific way.
//  The `Date` object provides methods to get the day, month, and year, which you can then assemble into any format you need.
// SOLUTION:
// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted());
export {};
