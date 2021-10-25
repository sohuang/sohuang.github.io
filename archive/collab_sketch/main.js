var config = {
     apiKey: "AIzaSyCHxGMLmydG3TwRzT4mYIT182iaKafCYJc",
     authDomain: "collab-sketch-40d74.firebaseapp.com",
     databaseURL: "https://collab-sketch-40d74.firebaseio.com",
     storageBucket: "",
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];
var slider;

function setup() {
     var canvas = createCanvas(600, 400);
     canvas.parent('sketch-holder');
     background(255);
     pointsData.on("child_added", function (point) {
          points.push(point.val());
     });
     canvas.mousePressed(drawPoint);
     canvas.mouseMoved(drawPointIfMousePressed);
     $("#colorPicker").spectrum({
          preferredFormat: "hex",
          showInitial: true,
          showInput: true
     });
     slider = createSlider(1, 50, 5);
     slider.parent('controlContainer');
}

function draw() {
     background(255);
     noStroke();
     for (var i = 0; i < points.length; i++) {
          var point = points[i];
          fill(point.color);
          ellipse(point.x, point.y, point.size, point.size);
     }
}

function drawPoint() {
     var selectedColor = $("#colorPicker").spectrum('get').toHexString();
     
     pointsData.push({x: mouseX, y: mouseY, color: selectedColor, size: slider.value()});
}

function drawPointIfMousePressed() {
     if (mouseIsPressed) {
          drawPoint();
     }
}

$("#saveDrawing").on("click", saveDrawing);
function saveDrawing() {
     saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);
function clearDrawing() {
     pointsData.remove();
     points = [];
}

