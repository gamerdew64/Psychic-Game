  // VARIABLES
  // ==========================================================================

  // We are defining a string of alphabet letters so that the computer can pick a letter for us to guess
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // Tracking wins
  var wins = 0;
  // Tracking losses
  var losses = 0;
  // Number of remaining guesses that will decrement with each incorrect guess
  var remainingGuesses = 9;
  // This is assigned to an array that will collect the user's guesses
  var currentGuesses = [];
  //userGuess is the user's selection by keystoke that is set to null by default
  var userGuess = "";
  // This is a prompt that asks for the user's name before beginning the game
  var userName= prompt("Please enter your name");
  // Both of these alert messages generate after the user enters their name, and it pipes the value into the message.
  alert("Greetings "+userName+", you will be playing the Psychic Guessing Game!");
  alert(userName+", You will be guessing the letter of the alphabet that I am thinking of, and you will have 12 guesses to do so. If you don't guess the correct letter in 12 guesses, you lose.");
  // We are creating a new variable called "computerLetter" and we are storing the randomly chosen letter from the length of the letters array
  var computerLetter = letters[Math.floor(Math.random() * letters.length)];
  // Added a console.log to display out to the console the letter that the computer picked
  console.log(" Computer picked: " + computerLetter);
  // Adding an onkeyup function to start the process of saving the choices to the userGuess variable, so that they can be checked against the computerLetter.
  document.onkeyup = function(event) {
    // When the user presses a key, it is recorded it and saved to userGuess
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (currentGuesses.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
      currentGuesses.push(userGuess);
      // Decrement guesses by 1
      remainingGuesses--;
    }

    // if the computerLetter is same as userGuess, then wins will be incremented, the user will be alterted that they have won, remaining guesses and will be reset and the currentGuesses array will be emptied.
    // The computer will randomly pick a new number
    if (computerLetter == userGuess) {
      wins++;
      alert("You guessed correctly, "+userName+". Congratulations!!! Keep going and see how high a score you can get!");
      console.log("Current number of wins " + wins);
      console.log("You guessed correctly, "+userName+". Congratulations!!!");
      remainingGuesses = 9;
      console.log("Number of remaining guesses: "+remainingGuesses);
      currentGuesses = [];
      computerLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log("The computer has now picked " +computerLetter);
    }

    // if the remainingGuesses equal 0, then losses will be incremented, the user will be alterted that they have run out of guesses, remaining guesses and will be reset to 12 and the currentGuesses array will be emptied.
    // The computer will randomly pick a new number
    if (remainingGuesses == 0) {
      losses++;
      console.log("Current number of losses " + losses);
      alert("You are out of guesses, "+userName+". Please try again!!!");
      console.log("You are out of guesses, "+userName+". Please try again!!!");
      remainingGuesses = 9;
      console.log("Number of remaining guesses: "+remainingGuesses);
      currentGuesses = [];
      computerLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log("The computer has now picked " +computerLetter);
    }

    // Created an HMTL variable and updated the HTML with the following values
    var html = "<h1>The Psychic Guessing Game!</h1>" + "<h4>Current Wins: " + wins + "</h4>" + "<h4>Current Losses: " + losses + "</h4>" + "<h4>Guesses Remaining: " + remainingGuesses + "</h4>" + "<h4>Your guesses so far: " + currentGuesses + "</h4>";
    // This places the above "html" into the #game ID on the index.html page
    document.querySelector("#game").innerHTML = html;
  }
