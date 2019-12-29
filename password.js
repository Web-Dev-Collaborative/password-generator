
// Variables for end user selections
var option1 = document.querySelector("#uppercase");
var option2 = document.querySelector("#lowercase");
var option3 = document.querySelector("numbers");
var option4 = document.querySelector("symbols");

// Make an array for all the possible characters used to make up the password
let alphabet = "abcdefghijklmnopqrstuvyxz"
let numbers = "0123456789"
let symbols = "~`!@#$%^&*()_-+=?"

// This indicates what to do with number strings and splitting into an array
let lowerCase = alphabet.split();
console.log(lowerCase);
let upperCase = alphabet.toUpperCase().split("");
console.log(upperCase);
let numberOptions = numbers.split();
console.log(numberOptions);
let symbolOptions = symbols.split();
console.log(symbolOptions);

let userInput = prompt("enter password length")  // Returns a string

// Console.log all items to ensure they are working
console.log("#uppercase", option1);
console.log("#lowercase", option2);
console.log("#numbers", option3);
console.log("#symbol", option4);

console.log(lowerCase);
console.log(upperCase);
console.log(numbers);
console.log(symbols);

console.log(Math.floor(Math.random() * 26));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 17));

// Random number from 0 to 25
let randomIndex = Math.floor(Math.random() * 26);

function generatepassword(userInput, character, length) {
    for(let i=0; i <userInput; i++);
        var randomLetter = character[Math.floor(Math.random()*length)]
}
// If conditions
if (userInput < 8) {
    alert("Your password is too short")
}

else if (userInput > 128) {
    alert("Your password is too long")
}

if (option1.checked === true) {
    console.log("Working");
}
if (option2.checked === true) {
    console.log("Working");
}
if (option3.checked === true) {
    console.log("Working");
}
if (option4.checked === true) {
    console.log("Working");
}

let wordbank = [];

//Arrays I made
wordbank.push(){
    console.log(wordbank);
}



// Create a for loop to select 10 characters from the array