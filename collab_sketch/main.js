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
     var canvas = createCanvas(400, 400);
     canvas.parent('sketch-holder');
     
     background(255);
     fill(0);
     pointsData.on("child_added", function (point) {
          points.push(point.val());
     });
     
     canvas.mousePressed(drawPoint);
     canvas.mouseMoved(drawPointIfMousePressed);
}

function draw() {
     background(255);
     
     for (var i = 0; i < points.length; i++) {
          var point = points[i];
          ellipse(point.x, point.y, 5, 5);
     }
}

function drawPoint() {
     pointsData.push({x: mouseX, y: mouseY});
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