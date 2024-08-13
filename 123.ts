// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. 
// The loop can stop once a vowel is found.

// SOLUTION:

function logUntilVowel(str:string): void {
    const vowels ="aeiouAEIOU";
    for (const characters of str){
        if (vowels.includes(characters)){
            console.log(`First vowel found: ${characters}`);
            break;
        }
        console.log(characters);
    }   
}
logUntilVowel("sdsji");