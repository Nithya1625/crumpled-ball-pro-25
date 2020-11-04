
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;

var paperball,dustbin,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height-20,width,20)
	
	paperball = new Paper(200,450,40);
	dustbin = new DustBin(600,height-30)
	
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("white");
  
  paperball.display();
  ground.display();
  dustbin.display();

  //drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

     if(paperball.body.position.y>=570)
     {
	  Matter.Body.applyForce(paperball.body,paperball.body.position,{x:8,y:-25});
	 }
	}
	if (keyCode === RIGHT_ARROW) {
		paperball.body.position.x = paperball.body.position.x + 10;
		
	   }
	   if (keyCode === LEFT_ARROW) {

		paperball.body.position.x = paperball.body.position.x - 10;
	   }
}
