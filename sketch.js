const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,0,70,70, "sandybrown");
    box2 = new Box(700,100,70,70, "sandybrown");
    ground = new Ground(width/2,height,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    Matter.Body.rotate(box1.body, PI/100);

    box1.display();
    box2.display();
    ground.display();
}