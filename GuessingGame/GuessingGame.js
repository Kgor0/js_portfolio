var secret = math.floor(math.random() * 10) + 1;
var startButton = document.getElementById("myBtn");
startButton.onclick = myGuess;

function myGuess() {
    var answer = prompt("Please guess a number between  1 and 10");
    answer = Number(answer);
    checkAnswer(answer);
}

function checkAnswer(guess) {
    if (guess === secret) {
        alert("Correct! Your guess '" + guess + "' is right.");
        document.getElementById("output").innerHTML = "Congratulations! You Won";
    } else if(guess < secret){
        alert("Your guess is too low");
        myGuess();
    } else if(guess > secret) {
        alert("Your guess is too high");
        myGuess();
    } else{
        alert("Invalid input!");
        myGuess();
    }

}
