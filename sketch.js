
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var ground,tree,stone,sling;
var mango1,mango2,mango3,mango4,mango5,mango6;
var boy;
function preload()
{

	boy= loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground =new Ground(600,580);
	tree = new Tree(1000,380,300,400);

	mango1= new Mango(900,350,10);
	mango2= new Mango(1000,300,10);
	mango3= new Mango(950,350,10);
	mango4= new Mango(1100,300,10);
  mango5= new Mango(1050,230,10);
  mango6= new Mango(900,350,10);


	stone = new Stone(240,430);

	sling = new Slingshot(stone.body,{x:240,y:430});

	

	

		Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(24);
  text("Press SPACE to get a Second Chance",50,100);
  Engine.update(engine);

  ground.display();
  tree.display();
  image(boy,200,350,200,300);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

 

  
  stone.display();

  sling.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);


  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  sling.attach(stone.body);
	}
  }

function mouseDragged(){
	
		Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

sling.fly();
	
}

function detectollision(lstone,lmango){
 
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

