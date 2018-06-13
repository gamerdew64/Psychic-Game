  // VARIABLES
  // ==========================================================================

  // We are defining a string of alphabet letters so that the computer can pick a letter for us to guess
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // Tracking wins
  var wins = 0;
  // Tracking losses
  var losses = 0;
  // Number of remaining guesses that will decrement with each incorrect guess
  var remainingGuesses = 10;
  // This is assigned to an array that will collect the user's guesses
  var currentGuesses = [];
  //userGuess is the user's selection by keystoke that is set to null by default
  var userGuess = null;
  // This is a prompt that asks for the user's name before beginning the game
  var userName= prompt("Please enter your name");
  // Both of these alert messages generate after the user enters their name, and it pipes the value into the message.
  alert("Greetings "+userName+", you will be playing the Psychic Guessing Game!");
  alert(userName+", You will be guessing the letter of the alphabet that I am thinking of, and you will have 10 guesses to do so. If you don't guess the correct letter in 10 guesses, you lose.");



  // We are creating a new variable called "computerLetter" and we are storing the randomly chosen letter from the length of the letters array
  var computerLetter = letters[Math.floor(Math.random() * letters.length)];
  // Added a console.log to display out to the console the letter that the computer picked
  console.log(" Computer picked: " + computerLetter);




  // Adding an onkeyup function to start the process of saving the choices to the userGuess variable
  document.onkeyup = function(event) {



    // When user presses a key, it records it and saves to userGuess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (currentGuesses.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
      currentGuesses[currentGuesses.length]=userGuess;
      // if it is a new letter then decrease remaining guesses by 1
      remainingGuesses--;
    }

    // if letterToBeGuessed is same as userGuess then record it as a win
    // and then reset guessesLeft to 9, and empty the guessesSoFar array
    // also have the computer make a new random pick
    if (computerLetter == userGuess) {
      wins++;
      alert("You guessed correctly, "+userName+". Congratulations!!! Keep going and see how high a score you can get!");
      console.log("You guessed correctly, "+userName+". Congratulations!!!");
      remainingGuesses = 10;
      currentGuesses = [];
      computerLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + remainingGuesses + " Your Guesses So Far: " + currentGuesses + " Computer picked: " + computerLetter);
    }

    // if guessesLeft gets to 0 then record it as a loss
    // and then reset guessesLeft to 9, and empty the guessesSoFar array
    // also have the computer make a new random pick
    if (remainingGuesses == 0) {
      losses++;
      alert("You are out of guesses, "+userName+". Please try again!!!");
      console.log("You are out of guesses, "+userName+". Please try again!!!");
      remainingGuesses = 10;
      currentGuesses = [];
      computerLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + remainingGuesses + " Your Guesses So Far: " + currentGuesses + " Computer picked: " + computerLetter);
    }

    // Create an HMTL variable and update the HTML with the following values
    var html = "<h1>The Psychic Guessing Game!</h1>" + "<h4>Please guess the letter</h4>" + "<h4>Current Wins: " + wins + "</h4>" + "<h4>Current Losses: " + losses + "</h4>" + "<h4>Guesses Remaining: " + remainingGuesses + "</h4>" + "<h4>Your guesses so far: " + currentGuesses + "</h4>";
    // This places the above "html" into the #game ID on the index.html page
    document.querySelector("#game").innerHTML = html;
  }
