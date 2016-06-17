

//function Bereken(getal) {
//    while (true) {
//        if (IsPriem(getal)) {
//              document.getElementById("primeGetal").innerHTML=getal;
//              return;
//        }
//        getal++;
//    }
//}

function Bereken(getal) {
    var startTijd = new Date();
    console.log("start", startTijd);
    while (true) {
        console.log("bereken", getal);
        if (IsPriem(getal)) {
              break;
        }
        getal++;
    }
    var eindTijd = new Date();
    var tijdVerschil = eindTijd - startTijd;

    document.getElementById("primeGetal").innerHTML=getal + " - in " + tijdVerschil+"ms";

    console.log("eind", eindTijd, tijdVerschil);
}



function IsPriem(x) {
    console.log("IsPriem", x);
    for (var i = 2; i < x; i++) {
        if (x % i == 0)
            return false;
    }

    return true;
}

//document.getElementById("timeSpent").innerHTML = document.getElementById("timeSpent").innerHTML + "Tijd: " + eindtijd.getMilliseconds() + "<br />";

//browser informatie stuk:

function ShowInfo() {
txt= navigator.userAgent;
document.getElementById("customInfo").innerHTML=txt;

}
//rock paper scissors against computer

/*var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
if (choice1 === choice2) {
    return "The result is a tie!";
    }

else if (choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    }
    else{
        return "paper wins";
    }
}
else if (choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    }
    else {
        return "scissors wins";
    }
 }
 else if (choice1 === "scissors") {
     if(choice2 === "rock") {
         return "rock wins";
        }
    else {
        return "scissors wins";
        }
    }
};
console.log(compare(userChoice, computerChoice));
*/

