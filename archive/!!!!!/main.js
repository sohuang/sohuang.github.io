function veryFirstFunction() {
     document.getElementById("veryFirstThings").style.display = "none";
     document.getElementById("firstThings").style.display = "block";
     document.getElementById("secretDiv").style.display = "none";
}

function muchoFirstFunction() {
     document.getElementById("veryFirstThings").style.display = "none";
     document.getElementById("unoThings").style.display = "block";
     document.getElementById("secretDiv").style.display = "none";
}

function firstFunction() {
     document.getElementById("unoThings").style.display = "none";
     document.getElementById("firstThings").style.display = "none";
     document.getElementById("secondThings").style.display = "block";
}

function unoFunction() {
     document.getElementById("unoThings").style.display = "none";
     document.getElementById("firstThings").style.display = "none";
     document.getElementById("dosThings").style.display = "block";
}

function secondFunction() {
     document.getElementById("dosThings").style.display = "none";
     document.getElementById("secondThings").style.display = "none";
     document.getElementById("allTitles").style.display = "none";
     document.getElementById("returnButton").style.display = "block";
     document.getElementById("returnButton").style.display = "block";
}

function twoOneFunction() {
     document.getElementById("something1").style.display = "block";
     secondFunction();
}
function twoTwoFunction() {
     document.getElementById("something2").style.display = "block";
     secondFunction();
}
function twoThreeFunction() {
     document.getElementById("something3").style.display = "block";
     secondFunction();
}
function twoFourFunction() {
     document.getElementById("something4").style.display = "block";
     secondFunction();
}

function dosOneFunction() {
     document.getElementById("something5").style.display = "block";
     secondFunction();
}
function dosTwoFunction() {
     document.getElementById("something6").style.display = "block";
     secondFunction();
}
function dosThreeFunction() {
     document.getElementById("something7").style.display = "block";
     secondFunction();
}
function dosFourFunction() {
     document.getElementById("something8").style.display = "block";
     secondFunction();
}

function returnFunction() {
     // document.getElementsByClassName("someThings").style.display = "none";
     document.getElementById("something1").style.display = "none";
     document.getElementById("something2").style.display = "none";
     document.getElementById("something3").style.display = "none";
     document.getElementById("something4").style.display = "none";
     document.getElementById("something5").style.display = "none";
     document.getElementById("something6").style.display = "none";
     document.getElementById("something7").style.display = "none";
     document.getElementById("something8").style.display = "none";
     document.getElementById("veryFirstThings").style.display = "block";
     document.getElementById("allTitles").style.display = "block";
     document.getElementById("returnButton").style.display = "none";
     document.getElementById("secretDiv").style.display = "block";
}

function secretFunction() {
     var myRandom = Math.round(Math.random() * 9);
     var secretUrl = new Array();
     secretUrl[0] = "http://weavesilk.com/";
     secretUrl[1] = "http://eelslap.com/";
     secretUrl[2] = "http://29a.ch/sandbox/2011/neonflames/";
     secretUrl[3] = "http://sorrysloth.com/";
     secretUrl[4] = "http://cat-bounce.com/";
     secretUrl[5] = "http://www.zefrank.com/snm/index.html";
     secretUrl[6] = "http://www.staggeringbeauty.com/";
     secretUrl[7] = "http://www.unwrong.com/projects/fractalexplorer/";
     secretUrl[8] = "http://slither.io/";
     secretUrl[9] = "http://www.barcinski-jeanjean.com/entries/line3d/";
     secretUrl[10] = "http://maninthedark.com/";
     secretUrl[11] = "http://realitytourist.net/inkblobs/";
     secretUrl[12] = "http://drawminos.com/";
     secretUrl[13] = "http://www.pointerpointer.com/";
     secretUrl[14] = "http://www.koalastothemax.com/";
     secretUrl[15] = "http://www.intotime.com/";
     secretUrl[16] = "http://www.kanyezone.com/";
     secretUrl[17] = "http://radiooooo.com/";
     window.open(secretUrl[myRandom]);
}
