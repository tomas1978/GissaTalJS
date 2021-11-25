var randomNumber=Math.random()*100;
var counter=0;

function processGuess() {
	counter++;
    var messageRef=document.getElementById("message_ref");
    var guessesRef=document.getElementById("number_guesses");
    var valueString=document.getElementById("guessInput").value;
    var guess=parseInt(valueString);

	guessesRef.innerHTML="Antal gissningar: "+counter;
    messageRef.innerHTML="Du har gissat";
    
	randomNumber=parseInt(randomNumber);
	if(guess<randomNumber) {
        messageRef.innerHTML="Din gissning är för låg";
    }
    else if(guess>randomNumber) {
        messageRef.innerHTML="Din gissing är för hög";
    }
    else if(guess==randomNumber){
        messageRef.innerHTML="Bra gjort! Du gissade rätt tal!";
    }
	else {
		messageRef.innerHTML="Felaktig gissning! Du måste skriva ett heltal!";
	}
}

function reset() {
    counter=0;
    var messageRef=document.getElementById("message_ref");
    messageRef.innerHTML="Du har inte gjort någon gissning";
    var guessesRef=document.getElementById("number_guesses");
    guessesRef.innerHTML="Antal gissningar: 0";
	guessesRef.innerHTML="Du har inte gjort någon gissning";
}