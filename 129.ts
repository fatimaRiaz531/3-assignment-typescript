// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending
//  on the context.In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.


// SOLUTION:
const traditionalVsArrow1 ={
    value: "traditionalVsArrow value",
    traditionalFunction: function(){
        console.log("Traditional function:", this.value);
    },
    arrowFunction: () => {
        console.log("Arrow function:",this.value);
    },
};
traditionalVsArrow1.traditionalFunction();
traditionalVsArrow1.arrowFunction();