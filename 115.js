// 🚀 Day 39 Challenge: Start Coding! 🚀
// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
// Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. 
// It's particularly useful for scenarios like mapping numbers to days of the week.
// SOLUTION:
function logDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Day Number");
    }
}
logDayOfWeek((5));
export {};
