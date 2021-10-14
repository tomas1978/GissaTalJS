var randomNumber=Math.random()*100;

function processGuess() {
    var valueString=document.getElementById("guessInput").value;
    var guess=parseInt(valueString);
    var messageRef=document.getElementById("message");
    messageRef.innerHTML="Du har gissat";
    if(guess<randomNumber) {
        messageRef.innerHTML="Din gissning är för låg";
    }
    else if(guess>randomNumber) {
        messageRef.innerHTML="Din gissing är för hög";
    }
    else {
        messageRef.innerHTML="Bra gjort! Du gissade rätt tal!";
    }

    console.log(valueString);
    
    randomNumber=parseInt(randomNumber);
    console.log(randomNumber);
}