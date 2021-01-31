var canvas;
var box1,box2,box3,box4
var ball 
var d
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(80,580,200,30);
    box1.shapeColor = "pink"

    box2 = createSprite(290,580,200,30);
    box2.shapeColor = "blue"

    box3 = createSprite(510,580,200,30);
    box3.shapeColor = "green"

    box4 = createSprite(730,580,200,30);
    box4.shapeColor = "red"

    ball = createSprite(random(0,800),random(0,600), 40,40);
    ball.shapeColor = "white"
    ball.velocityX = 10;
    ball.velocityY = 10;

}

function draw() {
    background(rgb(169,169,169));
    d=createEdgeSprites();
    ball.bounceOff(d);

    if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor = "pink"
        music.play();
    }

    if(box2.isTouching(ball)){
        ball.shapeColor = "blue"
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = "green"
    }

    if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor ="red"
    }

    drawSprites();
}
