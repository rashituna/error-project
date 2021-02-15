
var car,wall
var speed,weight
function setup(){
    var canvas = createCanvas(1600,400);
    car = createSprite(50,200,50,50);
    wall = createSprite(1500,200,60,height/2);
    speed=random(55,90)
    weight=random(55,90)
}

function draw(){
    background("black");
    car.velocityX=speed;
    drawSprite()
}