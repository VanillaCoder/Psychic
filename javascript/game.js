

var wins = 0;
var loss = 0;
var pcNumber = 0;
var guessHold = [];
var pcGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","Q","r","s","t","u","v","w","x","y","z"];
var lossCount = 0;
pcNumber = Math.floor(Math.random() * (26));
console.log(pcGuess[pcNumber] );

document.onkeyup = function(event){
    var guess = event.key;
    guessHold.push(guess + " ");

    if(guess === pcGuess[pcNumber]){
      wins++;
      document.getElementById("guessTracker").innerHTML = guessHold.toString();
      document.getElementById("winCount").innerHTML = wins;
      guessHold = [];
      lossCount = 0;
      pcNumber = Math.floor(Math.random() * (26));

    }
    else if(guess != pcGuess[pcNumber] && lossCount < 6){
      console.log(pcGuess[pcNumber] );

      document.getElementById("guessTracker").innerHTML = guessHold.toString();
      lossCount++;
    }
    else{
      loss++
      lossCount = 0;
      document.getElementById("lossCount").innerHTML = loss;
      guessHold = [];
      document.getElementById("guessTracker").innerHTML = guessHold.toString();
      pcNumber = Math.floor(Math.random() * (26));

    }


}

