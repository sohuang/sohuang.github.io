function veryFirstFunction() {
     document.getElementById("veryFirstThings").style.display = "none";
     document.getElementById("firstThings").style.display = "block";
}

function muchoFirstFunction() {
     document.getElementById("veryFirstThings").style.display = "none";
     document.getElementById("unoThings").style.display = "block";
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
}

