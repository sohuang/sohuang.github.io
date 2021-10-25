function sayThatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    if (event.keyCode == 32) {
        $("#easy").trigger("click");
    }
}

function thatWasYeezy() {
    var src = "http://24.media.tumblr.com/tumblr_m3xntmAqPA1rue873o1_400.png";
    show_image("http://24.media.tumblr.com/tumblr_m3xntmAqPA1rue873o1_400.png", 150,201, "That Was Yeezy");
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 150;
    img.height = 201;
    img.alt = alt;
    document.body.appendChild(img);
}