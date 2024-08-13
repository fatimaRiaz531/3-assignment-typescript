// **Question 98:** Create a JavaScript snippet that calculates and logs how many days are left until New Year.
// **Explain & TIP:** To find the difference between two dates, you can subtract one Date object from another,which 
// gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.
// SOLUTION:
// // Calculates how many days are left until New Year's Day
function daysUntilNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // january 1st day
    const diff = newYear.getTime() - today.getTime(); //differnce in milliseconds
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); //converts into days
    return days;
}
console.log(daysUntilNewYear() + "days until New Year.");
export {};
