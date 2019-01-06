var alphabetArray =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10; //amount of tries user has 
var lettersGuessed= []; //letter that user guessed
var computerChoice=[]; //random letter computer chooses
//var randomNumber;



function resetGame() {
    guessesLeft=10;
    lettersGuessed=[];
    //lettersGuessed.push(userGuess);
    startGame();
};

function startGame() {
   var randomNumber = Math.floor(Math.random()* alphabetArray.length);
    var computerPick = alphabetArray[randomNumber];
    console.log(computerPick);
   
    document.onkeyup = function(event) {
        var userGuess = event.key;
        lettersGuessed.push(userGuess);
        console.log(userGuess);
        
        if (userGuess === computerPick) {
            wins++;
            console.log("correct");
            resetGame();
            document.getElementById("userWins").innerHTML = "Wins: " + wins;
            document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
            document.getElementById("userLosses").innerHTML = "Losses: " + losses;
            document.getElementById("userGuesses").innerHTML = "Letters Guessed so Far: " + lettersGuessed;

        }
        if (userGuess !== computerPick) {
            guessesLeft--;
            //lettersGuessed.push(userGuess);
            console.log("wrong");
            document.getElementById("userWins").innerHTML = "Wins: " + wins;
            document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
            document.getElementById("userLosses").innerHTML = "Losses: " + losses;
            document.getElementById("userGuesses").innerHTML = "Letters Guessed so Far: " + lettersGuessed;

            
            if (guessesLeft<= 0) {
                losses++;
                guessesLeft=10;
                resetGame();
            }    
        
        }    


        
    };

    
   // document.getElementById("userWins").innerHTML = "Wins: " + wins;
    //document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    //document.getElementById("userLosses").innerHTML = "Losses: " + losses;
    //document.getElementById("userGuesses").innerHTML = "Letters Guessed so Far: " + lettersGuessed;

};