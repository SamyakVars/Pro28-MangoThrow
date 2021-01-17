
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, boy, stone, launchOb;

var mango1, mango2, mango3, mango4;


function preload()
{
	boy = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 700, width, 50)
	tree = new Tree(500, 350)

	stone = new Stone(145, 600, 10)

	launchOb = Bodies.circle(200, 50, 0.1)

	launchCon = new Slingshot(stone, launchOb)
	
	mango1 = new Mango(575, 450, 13, 33, 44)
	mango2 = new Mango(650, 425, 13, 33, 44)
	mango3 = new Mango(600, 400, 13, 33, 44)
	mango4 = new Mango(625, 450, 13, 33, 44)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  ground.display()
  tree.display()

  image(boy, 125, 565, 100, 150)

  stone.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()

  detectCollision(mango1, stone)
  detectCollision(mango2, stone)
  detectCollision(mango3, stone)
  detectCollision(mango4, stone)
  

  
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY}) 
 }
 
function mouseReleased(){
	
}

function keyPressed(){

}

function detectCollision(lmango, lstone){
	mangoPos = lmango.body.position;
	stonePos = lstone.body.position

	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)

	if (distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false)
	}
}




