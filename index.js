var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
document.querySelector("img.img1").setAttribute("src","./images/dice" + randomNumber1 + ".png");

var randomNumber2 = (Math.floor(Math.random() * 6) + 1);
document.querySelector("img.img2").setAttribute("src","./images/dice" + randomNumber2 + ".png");

if (randomNumber1  == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}

if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
 // document.querySelector("h1").style.textAlign = "left";
}