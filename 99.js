// **Question 99:** Generate a date object representing your next birthday and log it to the console.
// **Explain & TIP:** When creating a `Date` object for a future event like a birthday, you might need
//  to adjust the year based on whether the birthday has already occurred this year or not.
// SOLUTION:
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday = getNextBirthday(5, 17);
console.log("Next Birthday on:", nextBirthday.toLocaleDateString());
export {};
