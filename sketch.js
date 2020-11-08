//To declare the constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//To declare the variables
var dustbin1, paperObject,groundObject;
var world;

function setup() {
//To create the cancas
createCanvas(1250, 650);
//To have the positions of the rectangle to it's center
rectMode(CENTER);

//To create the engine
engine = Engine.create();
//To create a world
world = engine.world;

//To create a new paper ball
paperObject=new Paper(200,450,70);
//To create a new ground
groundObject=new Ground(width/2,620,width,20);
//To create all the three sides of the bin
dustbin1=new Dustbin(1200,510,20,200);
dustbin2=new Dustbin(1000,510,20,200);
dustbin3=new Dustbin(1100,600,220,20);

//To make th enegine run
Engine.run(engine); 
}

function draw() {
//To have the positions of the rectangle to it's center
rectMode(CENTER);
//To make the background grey
background(230);
 
//To display the paper ball  
paperObject.display();
//To display the ground
groundObject.display();
//To diplay all the three sides of the bin
dustbin1.display();
dustbin2.display();
dustbin3.display();
}

//To make a function 
function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
}
  }