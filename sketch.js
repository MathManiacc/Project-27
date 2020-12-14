
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 50, 570, 30);
	bobObject1 = new Bob(240, 550)
	bobObject2 = new Bob(320, 550)
	bobObject3 = new Bob(400, 550)
	bobObject4 = new Bob(480, 550)
	bobObject5 = new Bob(560, 550)

	rope1 = new Rope(bobObject1.body, roof.body, -150, 0)
	rope2 = new Rope(bobObject2.body, roof.body, -75, 0)
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0)
	rope4 = new Rope(bobObject4.body, roof.body, 75, 0)
	rope5 = new Rope(bobObject5.body, roof.body, 150, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  Engine.update(engine);

  drawSprites();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();
	keyPressed();
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -1030, y:0})
	}
}


