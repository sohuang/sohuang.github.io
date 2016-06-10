var player;
var playerImage;
var enemy1;
var enemy1Image;
var backgroundImage;
var score = 0;
var bubble;

function preload() {
    playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
    enemy1Image = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}

function setup() {
    createCanvas(256,256);
    bubble = loadImage("http://l.wigflip.com/XSitsxs8/wigflip-ds.png");
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy1 = createSprite(width/2, 0, 0, 0);
    enemy1.addImage(enemy1Image);
    enemy1.rotationSpeed = 4.0;
    isGameOver = false;
}


function draw() {
    background(backgroundImage);
    
    image(bubble, 40*width/100, 45*height/100);
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))) {
         player.position.x += 2;
    }
    
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) {
         player.position.x -= 2;
    }
    
    enemy1.position.y = enemy1.position.y + 3;
    
    if (enemy1.position.y > height) {
         enemy1.position.y = 0;
         enemy1.position.x = random(5, width-5);
    }
    
    drawSprites();
    
    function gameOver() {
        enemy1.position.y = 0;
        background(0);
        textAlign(CENTER);
        fill("white");
        textFont("Consolas");
        textSize(25);
        text("Game Over!", width/2, height/4);
        textSize(12);
        text("Your score: " + score, width/2, height/2);
        text("Click anywhere", width/2, 13*height/18);
        text("or press 'Enter'", width/2, 14*height/18);
        text("to try again", width/2, 15*height/18);
    }

    if (isGameOver) {
        gameOver();
    } else {
        if (enemy1.overlap(player)) {
            isGameOver = true;
        } else {
            textFont("Consolas");
            fill("white");
            textAlign(RIGHT,TOP);
            text("Score: " + score, 250, 5);
        }
    }
    
        if (enemy1.position.y >= 255) {
            score++;
        }
}

function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-(playerImage.height/2);
        enemy1.position.x = width/2;
        enemy1.position.y = 0;
        score = 0;
    }
}

function keyPressed() {
   if (keyDown(ENTER)) {
       if (isGameOver) {
            isGameOver = false;
            player.position.x = width/2;
            player.position.y = height-(playerImage.height/2);
            enemy1.position.x = width/2;
            enemy1.position.y = 0;
            score = 0;
        }
   } 
}

    
  
