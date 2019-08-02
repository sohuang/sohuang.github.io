// idk but changing bg doesn't work if this file is not in same dir as index

function init() {
	var bg = Math.floor(Math.random() * 14) + 1;
	var ext = "png";
	if (bg >= 8)
	{
		ext = "gif";
	}
	document.body.style.backgroundImage = "url(home/bg" + bg + "." + ext + ")";

	document.body.style.color = "#FFFFFF";
}
window.onload = init;