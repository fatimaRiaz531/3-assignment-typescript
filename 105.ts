

// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
// Explain & TIP: Simulating a dice roll involves randomly choosing an integer between 1 and 6.
//  Use Math.random() along with some arithmetic to achieve this range.

// SOLUTION:

function rollDice():number {
  return Math.floor(Math.random()* 6 ) +1;
}
console.log(rollDice());
