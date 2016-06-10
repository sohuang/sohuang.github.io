var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var numGroundSprites;
var GRAVITY = 0.3;
var JUMP = -5;
var player;
var obstacleSprites;
var isGameOver;
var score;
var groundImage;
var gameOverImage;

var newStyle = document.createElement('style');
newStyle.appendChild(document.createTextNode("\
@font-face {\
    font-family: 'silksreen';\
    src: url('web fonts\ silkscreen_normal_macroman\ slkscr-webfont.eot') format(WOFF);\
}\
"));
document.head.appendChild(newStyle);
    
function preload() {
    groundImage = loadImage("bricksx50.png");
}

function setup() {
    isGameOver = false;
    score = 0;
    
    createCanvas(400, 300);
    background(150, 200, 250);
    groundSprites = new Group();
    gameOverImage = loadGif("gameOverImage.gif");
    
    numGroundSprites = width/GROUND_SPRITE_WIDTH + 1;
    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = createSprite(n*50, height-25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
        groundSprite.addImage(groundImage);
    }
    
    player = createSprite(100, height-75, 50, 50);
    
    obstacleSprites = new Group();
}

function draw() {
    if (isGameOver) {
        background(0);
        fill(255);
        textAlign(CENTER);
        textFont("silkscreen");
        textSize(40);
        text("Game Over!", camera.position.x, camera.position.y - 85);
        textSize(20);
        text("Your score was: " + score, camera.position.x, camera.position.y - 40);
        textSize(15);
        text("Click or press space to restart", camera.position.x, camera.position.y + 100);
        image(gameOverImage, camera.position.x - 56, camera.position.y - 10);
    } else {
        background (150, 200, 250);
        player.velocity.y = player.velocity.y + GRAVITY;
        
        if (groundSprites.overlap(player)) {
            player.velocity.y = 0;
            player.position.y = (height-50) - (player.height/2);
            // player.position.y = (height-75);
        }
        
        if (keyDown(UP_ARROW)) {
            player.velocity.y = JUMP;
        }
        
        player.position.x = player.position.x + 5;
        camera.position.x = player.position.x + (width/4);
        
        var firstGroundSprite = groundSprites[0];
        if (firstGroundSprite.position.x <= camera.position.x - (width/2 + firstGroundSprite.width/2)) {
            groundSprites.remove(firstGroundSprite);
            firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites*firstGroundSprite.width;
            groundSprites.add(firstGroundSprite);
        }
        
        if (random() > 0.95) {
            var obstacle = createSprite(camera.position.x + width, random(0, (height-50) - 15), 30, 30 );
            obstacleSprites.add(obstacle);
        }
        
        var firstObstacle = obstacleSprites[0];
        if (obstacleSprites.length > 0 && firstObstacle.position.x <= camera.position.x - (width/2 + firstObstacle.width/2)) {
            removeSprite(firstObstacle);
        }
        
        obstacleSprites.overlap(player, endGame);
        
        drawSprites();
        
        score = score + 1;
        textAlign(CENTER);
        textFont('silkscreen');
        text("Score: " + score, camera.position.x, 15);
    }
}

function endGame() {
    isGameOver = true;
}

document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        if (isGameOver) {
            for (var n = 0; n < numGroundSprites; n++) {
                var groundSprite = groundSprites[n];
                groundSprite.position.x = n*50;
            }
            
            player.position.x = 100;
            player.position.y = height-75;
            
            obstacleSprites.removeSprites();
            
            if (isGameOver) {
                isGameOver = false;
            }
        }
    }
}

function mouseClicked() {
    if (isGameOver) {
        for (var n = 0; n < numGroundSprites; n++) {
            var groundSprite = groundSprites[n];
            groundSprite.position.x = n*50;
        }
        
        player.position.x = 100;
        player.position.y = height-75;
        
        obstacleSprites.removeSprites();
        
        if (isGameOver) {
            isGameOver = false;
        }
    }
}