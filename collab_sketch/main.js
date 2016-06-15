var config = {
     apiKey: "AIzaSyCHxGMLmydG3TwRzT4mYIT182iaKafCYJc",
     authDomain: "collab-sketch-40d74.firebaseapp.com",
     databaseURL: "https://collab-sketch-40d74.firebaseio.com",
     storageBucket: "",
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];

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
}

function draw() {
     background(255);
     noStroke();
     for (var i = 0; i < points.length; i++) {
          var point = points[i];
          fill(point.color);
          ellipse(point.x, point.y, 5, 5);
     }
}

function drawPoint() {
     var selectedColor = $("#colorPicker").spectrum('get').toHexString();
     pointsData.push({x: mouseX, y: mouseY, color: selectedColor});
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

