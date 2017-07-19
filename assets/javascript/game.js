//declare variables and arrays
//var authors = ["ANGELOU", "AUSTEN", "BRONTE", "DOSTOYEVSKY", "JOYCE", "KAFKA", "ROWLING", "SHAKESPEARE"];
var authors = ["BEE", "ANT", "DOG"];
var dashesArray = [];
var dashes;
var wins = 0;
var lettersYes = [];
var lettersNo = [];
var count = 0;



// Randomly chooses an author from the authors array. This is the Computer's choice.
// It has full author names in it, like AUSTEN, BRONTE, etc
var chosenAuthor = authors[Math.floor(Math.random() * authors.length)];

//push as many underscores as there are letters in the author name into the dashesArray
for (var i = 0; i < chosenAuthor.length; i++){
	dashesArray.push(" _ ");
}

//join the array into a string separated by white space instead of commas
//put it in an onload function because at this point the html tags don't exist yet
window.onload = function() {
	
	underlines.innerHTML = dashesArray.join(" ");
	
 }


// function executes when onkeyup event fires
// word event can be waffle
document.onkeyup = function(event) {

	// Determines which key was pressed.
	// Make it uppercase in order to compare it with author name
    var playerLetter = event.key.toUpperCase();

    // Check in the chosen author's name for the guessed playerLetter
    for (var i = 0; i < chosenAuthor.length; i++){

    	count++;

    	// if the playerLetter is in the author's name, display the letter in guessedRight ID
	    if (chosenAuthor[i] === playerLetter){
	    	console.log(chosenAuthor[i] + "  " + playerLetter);

	    	guessedRight.innerHTML = event.key;
	    }
	    // else if not found at any array index, once for has looped through the whole word
	    // then display the letter in guessedWrong ID
	    // reset count to 0 for the next letter
	    else if (count === chosenAuthor.length){
	    	lettersNo.push(" " + playerLetter);
	    	guessedWrong.innerHTML = lettersNo;
	    	count = 0;
	    }
	}
}