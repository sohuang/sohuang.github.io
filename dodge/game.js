var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;
var score = 0;

function preload() {
    playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
    //https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}

function setup() {
    createCanvas(256,256);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
    isGameOver = false;
}


function draw() {
    background(backgroundImage);
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))) {
         player.position.x += 2;
    }
    
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) {
         player.position.x -= 2;
    }
    
    enemy.position.y = enemy.position.y + 3;
    
    if (enemy.position.y > height) {
         enemy.position.y = 0;
         enemy.position.x = random(5, width-5);
    }
    
    drawSprites();
    
    function gameOver() {
        enemy.position.y = 0;
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
        if (enemy.overlap(player)) {
            isGameOver = true;
        } else {
            textFont("Consolas");
            fill("white");
            textAlign(RIGHT,TOP);
            text("Score: " + score, 250, 5);
        }
    }
    
        if (enemy.position.y >= 255) {
            score++;
        }
}

function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-(playerImage.height/2);
        enemy.position.x = width/2;
        enemy.position.y = 0;
        score = 0;
    }
}

function keyPressed() {
   if (keyDown(ENTER)) {
       if (isGameOver) {
            isGameOver = false;
            player.position.x = width/2;
            player.position.y = height-(playerImage.height/2);
            enemy.position.x = width/2;
            enemy.position.y = 0;
            score = 0;
        }
   } 
}

    
  
