//   🚀 Day 42 Challenge: Start Coding! 🚀

// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
// Explain & TIP: The this keyword in an object's method refers to the object itself, making it straightforward to access 
// its properties from within its methods.

// SOLUTION:
const person = {
    name :"Fatima",
    getName: function(){
        return this.name;
    },
};
console.log(person.getName());