
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;



function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
//1600,700

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,height-10,width,20);
	dustbinObject=new Dustbin(width/2+300,height-80);
	paperObject=new paper(width/2-500,height-300,50)

	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  groundObject.display();
  dustbinObject.display();
  paperObject.display();
  


}

