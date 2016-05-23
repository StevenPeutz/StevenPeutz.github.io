

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
// gevonden code voor timing van resultaat:

/* Keuze A, 'console.time' functie..

var iterations = 1000000;
console.time('Function #1');
for(var i = 0; i < iterations; i++ ){
    functionOne();
};
console.timeEnd('Function #1')

console.time('Function #2');
for(var i = 0; i < iterations; i++ ){
    functionTwo();
};
console.timeEnd('Function #2')
*/


/* op basis van performance functie oid (keuze B, vereist miss workers en dat gebruik niet..)

var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
*/


/* op basis van timestamp (keuze C)

var start = +new Date();  // log start timestamp
Bereken();
var end =  +new Date();  // log end timestamp
var diff = end - start;
*/

