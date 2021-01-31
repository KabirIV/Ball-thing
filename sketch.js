
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
	var bob1, bob2;
	var bob3, bob4;
	var bob5;
	var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bob1 = createSprite(230,600,10,10)
	bob2 = createSprite(248,600,10,10)
	bob3 = createSprite(264,600,10,10)
	bob4 = createSprite(282,600,10,10)
	bob5 = createSprite(300,600,10,10)
	roof = createSprite(264,500,90,8)

	bob1.shapeColor = "pink"
	bob2.shapeColor = "pink"
	bob3.shapeColor = "pink"
	bob4.shapeColor = "pink"
	bob5.shapeColor = "pink"
	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  var pointA= this.rope.bodyA.position;
  var pointB= this.rope.bodyB.position;

  strokeweight(2);
  var Anchor1X = pointA.x
  var Anchor1Y = pointA.y

  var Anchor2X = pointB.x + this.offsetX
  var Anchor2Y = pointB.y + this.offsetY

  line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
  
  drawSprites();
 
}



