
//   Question 117: Implement a switch statement that evaluates an expression and uses the default case if none 
//   of the cases match.
// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none 
// of the other case labels match the expression's value.

// SOLUTION:
function evaluateGrade(grade:string) :void{
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
                console.log("Good");
                break;
        case "C":
                console.log("Satisfactory");
                break; 
        case "D":
                console.log("Need Improvement");
                break;  
        case "F":
                console.log("Fail");
                break;
    
        default:
            console.log("Invalid Grade")
            break;
    } 
}
evaluateGrade(("B"));