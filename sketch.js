/**This renaming is done for ease of use */
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;

/**
 * function setup():
 * This will execute only once at the beginning.
 * So the things that need to happen once are added here.
 */
function setup(){
    /**Here we create a canvas of dimensions 1000px x 600px, which will be our viewport */
    var canvas = createCanvas(1000,600);
    
    /**A physics engine is being created here using Engine.create() */
    engine = Engine.create();
    
    /**We are taking the world that is created along with that physics engine and storing it in a variable "world"*/
    world = engine.world;

    /**We are creating 2 box objects from Box class */
    box1 = new Box(600,0,70,70, "sandybrown");
    box2 = new Box(700,100,70,70, "sandybrown");
    
    /**
     * We are creating 1 ground object from Ground class
     * Here "width" and "height" are pre-existing constants storing the width & height of the canvas */
    ground = new Ground(width/2,height,width,20)
}

/**
 * function draw():
 * This will execute multiple times.
 * Whatever in draw() will be redrawn over and over again onto the canvas.
 */
function draw(){
    
    /**This will erase the canvas each time*/
    background(0); 

    /**Each time draw() is called, the engine needs to be updated. */
    Engine.update(engine);
    
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    
    Matter.Body.rotate(box1.body, PI/100);

    /**The display function is called each time to redraw the rectangle(or shape) for each new position of the body */
    box1.display();
    box2.display();
    ground.display();
}