var canvas;
var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var numGroundSprites;
var GRAVITY = 0.3;
var JUMP = -5;
var player;
var playerImage;
var obstacleSprites;
var isGameOver;
var score;
var groundImage;
var gameOverImage;
var pointSprites;
var pointSpritesImages;
var obstacleImages;
var randomIndex;
var img;
var bgImage;

function preload() {
    obstacle1 = loadGif("obstacle1.gif");
    obstacle2 = loadGif("obstacle2.gif");
    obstacle3 = loadGif("obstacle3.gif");
    obstacle4 = loadGif("obstacle4.gif");
    obstacleImages = [obstacle1, obstacle2, obstacle3, obstacle4];
    bgImage = loadImage("bgImage.png");
    point1 = loadGif("point1.gif");
    point2 = loadGif("point2.gif");
    point3 = loadGif("point3.gif");
    point4 = loadGif("point4.gif");
    point5 = loadGif("point5.gif");
    pointSpritesImages = [point1, point2, point3, point4, point5];
    silkscreen = loadFont("slkscr-webfont.ttf");
    playerImage = loadGif("player.gif");
}

function getRandomImage(array) {
    randomIndex = Math.floor(Math.random() * array.length);
    img = array[randomIndex];
    return img;
}

function setup() {
    isGameOver = false;
    score = 0;
    
    canvas = createCanvas(400, 300);
    canvas.parent('sketch-holder');

    background(150, 200, 250);
    groundSprites = new Group();
    gameOverImage = loadGif("gameOverImage.gif");
    groundImage = loadImage("platformertiles1.png");
    
    numGroundSprites = width/GROUND_SPRITE_WIDTH + 1;
    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = createSprite(n*50, height-25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
        groundSprite.addImage(groundImage);
    }
    
    player = createSprite(100, height-70, 36, 41);
    player.addImage(playerImage);
    
    obstacleSprites = new Group();
    
    pointSprites = new Group();
}

function draw() {
    if (isGameOver) {
        background(0);
        fill(255);
        textAlign(CENTER);
        textFont(silkscreen);
        textSize(40);
        text("Game Over!", camera.position.x, camera.position.y - 85);
        textSize(20);
        text("Your score was: " + score, camera.position.x, camera.position.y - 40);
        textSize(15);
        text("Click or press space to restart", camera.position.x, camera.position.y + 100);
        image(gameOverImage, camera.position.x - 56, camera.position.y - 10);
    } else {
        background (28, 36, 74);
        player.velocity.y = player.velocity.y + GRAVITY;
        
        if (groundSprites.overlap(player)) {
            player.velocity.y = 0;
            player.position.y = height-70;
        }
        
        if (keyDown(UP_ARROW)) {
            player.velocity.y = JUMP;
        }
        
        player.position.x = player.position.x + 3;
        camera.position.x = player.position.x + (width/4);
        
        var firstGroundSprite = groundSprites[0];
        if (firstGroundSprite.position.x <= camera.position.x - (width/2 + firstGroundSprite.width/2)) {
            groundSprites.remove(firstGroundSprite);
            firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites*firstGroundSprite.width;
            groundSprites.add(firstGroundSprite);
        }
        
        if (random() > 0.98) {
            var obstacle = createSprite(camera.position.x + width, random(0, (height-50) - 15), 30, 30 );
            obstacleSprites.add(obstacle);
            obstacle.addImage(getRandomImage(obstacleImages));
        }
        
        var firstObstacle = obstacleSprites[0];
        if (obstacleSprites.length > 0 && firstObstacle.position.x <= camera.position.x - (width/2 + firstObstacle.width/2)) {
            removeSprite(firstObstacle);
        }
        
        obstacleSprites.overlap(player, endGame);
        
        if (random() > 0.99) {
            var point = createSprite(camera.position.x + width, random(0, (height-50) - 15), 30, 30);
            pointSprites.add(point);
            point.addImage(getRandomImage(pointSpritesImages));
        }
        
        var firstPointSprite = pointSprites[0];
        if (pointSprites.length > 0 && firstPointSprite.position.x <= camera.position.x - (width/2 + firstPointSprite.width/2)) {
            removeSprite(firstPointSprite);
        }
        
        pointSprites.overlap(player, points);
        
        drawSprites();
        
        score = score + 1;
        textAlign(CENTER);
        textFont(silkscreen);
        fill(255);
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
            player.position.y = height-90;
            
            score = 0;
            
            obstacleSprites.removeSprites();
            pointSprites.removeSprites();
            
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
        player.position.y = height-90;
        
        score = 0;
        
        obstacleSprites.removeSprites();
        
        if (isGameOver) {
            isGameOver = false;
        }
    }
}

function points(point) {
    score += 5;
    point.remove();
}