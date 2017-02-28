// idk but changing bg doesn't work if this file is not in same dir as index

function init() {
	document.body.style.backgroundImage = "url(home/bg" + "0" + (Math.floor(Math.random() * 6) + 1) + ".png)";
	document.body.style.color = "#FFFFFF";
}
window.onload = init;