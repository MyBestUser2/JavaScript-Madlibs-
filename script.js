var adjective = prompt("Enter an adjective: ");
var degrees = prompt("Enter a number between 30 and 100");
var yourName = prompt("Enter Name: ");


var equation1 = prompt("Double, Triple, or Quadruple the amount of days")


a =  (+ equation1);


var b = 3


var result = a * b;


alert("The result is : "+result);

console.log("During this time of year, things are too " + adjective + " The weather is severe, and the temperature is " + degrees +  " and you think it will last for " + equation1 + " days" + ". " + yourName +
" wants to stay home, but mother tells to go outside as the weather isnt as bad as it seems." + ".. ")

let isCorrectGuess= false;
const actualNumber = 2;
const myGuess = prompt("Is it correct that the weather is severe enough? Pick a number between 1 and 2?");

if (+myGuess === actualNumber) {
    isCorrectGuess = true;
}

if (isCorrectGuess === true) {
    console.log("However, the forecast says otherwise and your mother lets you stay in.");
} else {
    console.log('Your mom forces you outside in severe weather.');
}