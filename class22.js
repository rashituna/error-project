const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ball = new Box(200,200,50,50)
    ball2 = new Box(240,300,50,50)
    ground= new Ground(200,390,400,10)

  
}

function draw(){
    background(0);
    Engine.update(engine);
    ball.display()
    ball2.display()
    ground.display()
}