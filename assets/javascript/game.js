//declare variables and arrays
var authors = ["BEE", "CHEETAH", "DINOSAUR", "DUCK", "FISH", "FOX", "FRIENDS", "HAMSTER", "HEART", "MOUSE", "OSTRICH", "OWL", "PIRATE", "RAINBOW", "REINDEER", "SUN", "TRIANGLE", "WITCH"];
//var authors = ["BEE", "ANT", "DOG"];
var chosenAuthor;
var dashesArray = [];
var wins = 0;
var lettersNo = [];
var foundDashesInAuthors = true;
var numGuesses = 10;
var foundInLettersNo = false;
var foundLetterInAuthors = 0;
var lookForDashes;




	// Randomly chooses an author from the authors array. This is the Computer's choice.
	// It has full author names in it, like AUSTEN, BRONTE, etc
	chosenAuthor = authors[Math.floor(Math.random() * authors.length)];

	//push as many underscores as there are letters in the author name into the dashesArray
	for (var i = 0; i < chosenAuthor.length; i++){
		dashesArray.push(" _ ");
	}

	//join the array into a string separated by white space instead of commas
	//put it in an onload function because at this point the html tags don't exist yet
	//so this won't run until after html loads
	window.onload = function() {
		
		guessedRight.innerHTML = dashesArray.join(" ");
		
	}


// function executes when onkeyup event fires
// word event can be waffle, it's not a reserved word
document.onkeyup = function(event) {
console.log("in the onkeyup function");
	if(numGuesses > 0 && foundDashesInAuthors == true){	

		document.getElementById("artwork").src = "assets/images/img_initial2.png";

		// Determines which key was pressed.
		// Make it uppercase in order to compare it with author name
	    var playerLetter = event.key.toUpperCase();

	    // Check in the chosen author's name for the guessed playerLetter
	    for (var i = 0; i < chosenAuthor.length; i++){


	    	// if the playerLetter is in the author's name, display the letter in guessedRight ID
		    if (chosenAuthor[i] === playerLetter){

		    	//put found letter in its correct location
		    	dashesArray[i] = playerLetter;

		    	//display guess
		    	guessedRight.innerHTML = dashesArray.join(" ");

		    	//check to see if word has been guessed
		    	//if yes, reset the game, no, keep playing
		    	lookForDashes = dashesArray.indexOf(" _ ");

	    		if(lookForDashes === -1){
	    			foundDashesInAuthors = false;
	    		}

				foundLetterInAuthors++;

		    } // end if

		} // end for loop


	    // if foundLetterInAuthors === 0, then that letter wasn't found. 
	    if (foundLetterInAuthors === 0){


		    // display the letter in guessedWrong ID
	    	for (var k = 0; k < lettersNo.length; k++){

	    		if (lettersNo[k] === playerLetter){
	    			foundInLettersNo = true;
	    		}	
	    	}

	    	if (foundInLettersNo == false){
	    		lettersNo.push(playerLetter);
	    		guessedWrong.innerHTML = lettersNo.join(" ");
	    		guessesLeft.innerHTML = --numGuesses;
	    	}
	    	else {
	    		foundInLettersNo = false;
	    	}
	    	
	    }
	    foundLetterInAuthors = 0;

	}
	// if the author is guessed
	else if (foundDashesInAuthors == false){
		// add to wins
		winsTotal.innerHTML = ++wins;

		//load the image
		var imgName = chosenAuthor.toLowerCase();
		document.getElementById("artwork").src = "assets/images/img_" + imgName + ".png";

		// reset flags and variables
		numGuesses = 10;
		foundDashesInAuthors = true;
		foundInLettersNo = false;
		dashesArray = [];
		lettersNo = [];
		//reset game
		chosenAuthor = authors[Math.floor(Math.random() * authors.length)];
		for (var i = 0; i < chosenAuthor.length; i++){
			dashesArray.push(" _ ");
		}
		guessedRight.innerHTML = dashesArray.join(" ");
		guessedWrong.innerHTML = lettersNo;
	}
	//number of guesses is used up
	else if (numGuesses === 0){
		// reset flags and variables
		numGuesses = 10;
		foundDashesInAuthors = true;
		foundInLettersNo = false;
		dashesArray = [];
		lettersNo = [];
		//reset game
		chosenAuthor = authors[Math.floor(Math.random() * authors.length)];
		for (var i = 0; i < chosenAuthor.length; i++){
			dashesArray.push(" _ ");
		}
		guessedRight.innerHTML = dashesArray.join(" ");
		guessedWrong.innerHTML = lettersNo;
	}

	
}


