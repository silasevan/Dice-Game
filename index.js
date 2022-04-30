let randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

let randomDiceImage = "dice" + randomNumber1 + ".png";

let randomSourceImage = "images/" + randomDiceImage;
let rollDice = document.querySelectorAll("img")[0];
console.log(rollDice);
rollDice.setAttribute("src", randomSourceImage);
console.log(rollDice);

// for dice 2

let randomNumber2 = Math.floor(Math.random()* 6) + 1;
console.log(randomNumber2);
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomSourceImage2 = "images/" + randomDiceImage2;

let rollDice2 = document.querySelectorAll("img")[1];
rollDice2.setAttribute("src", randomSourceImage2);
console.log(rollDice2);



let bigText = document.querySelector("h1");

console.log(bigText)

if(randomNumber1 > randomNumber2){
    bigText.innerHTML="😀Player 1" + " " + "win"
}
else if(randomNumber1 == randomNumber2){
bigText.innerHTML="🚩Draw"
}
else{
    bigText.innerHTML="😀Player 1" + " " + "win"
}
