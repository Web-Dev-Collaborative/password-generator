// Generator functions - https://www.net-comber.com/charset.html
// get random lowercase letters
functions getRandomLower() {
    return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
}
functions getRandomUpper() {
    return String.fromCharCode (Math.floor(Math.random() * 26) + 65);
}
functions getRandomNumber() {
    return String.fromCharCode (Math.floor(Math.random() * 10) + 48);
}
functions getRandomSymbol() {
    return String.fromCharCode (Math.floor(Math.random() * 10) + 48);
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

console.log(Math.floor(Math.random() * 26) + 97);


let alphabet = a...z

let lowerCase = alphabet.split();
console.log(lowerCase)

let randomIndex = Math.floor(Math.random() * 26)  // random number from 0 to 25

let userInput = prompt("enter password length")  // returns a string

for(userInput < 8)
alert("Your password is too short")