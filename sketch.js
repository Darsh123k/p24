
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Hammer1
var rubber1
var Plane


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

Hammer1 =new Hammer(300,100)
Plane=new Plane((600,height,1200,20))
rubber1 = new rubber(555,height,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update
  Hammer1.display;
  Plane.display;
  rubber1.display
  drawSprites();
 
}



