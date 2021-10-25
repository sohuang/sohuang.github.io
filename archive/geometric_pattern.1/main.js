var NUM_CIRCLES = 12;
var gspace = 1;

var canvas;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;

var animated;

function setup() {
    canvas = createCanvas(600, 480);

    frameRate(3);
    
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/2;
    
    rVal = 255;
    gVal = 0;
    bVal = 0;
}

function reset() {
  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;
  animated = true;
  rVal = random(0,255);
  gVal = random(0,255);
  bVal = random(0,255);
}

function draw() {
    if (animated) {
        drawAnimated();
    }
}

function freeze() {
  animated = !animated;
  return false;
}

function drawAnimated() {
    var isShifted = false;
    
    var y = height;
    while (y >= 0) {
        
        var x;
        
        if (isShifted) {
            x = circleRadius;
        } else {
            x = 0;
        }
        
        while (x <= width) {
                
                var g = 1;
                
            stroke(color(rVal, gVal, bVal));
            fill(color(rVal, gVal, bVal));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = (gspace * x) + circleDiameter;
        }
        
        y = y - circleRadius;
        isShifted = !isShifted;
        
        rVal = (rVal + 254) % 256;
        gVal = (gVal + 7) % 256;
        bVal = (bVal + 3) % 256;
    }
}

function keyPressed() {
    if (keyCode === 115 || keyCode === 83) {
        saveCanvas('geometricPattern', 'png');
    }
    return false;
}

function save() {
    saveCanvas('geometricPattern', 'png');
}

function something() {
    gspace++;
    reset();
}

function idk() {
    NUM_CIRCLES++;
    reset();
}

function ughh() {
    if (NUM_CIRCLES > 1) {
        NUM_CIRCLES--;
        reset();
    }
}