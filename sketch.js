const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var wall1, wall2, wall3;

var bin, binBody, binIMG;

function preload(){

binIMG = loadImage("Images/dustbingreen.png");

}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(60, 10, 35, 35);

	ground = new Ground(400,550,width*2,15);

	wall1 = new Wall(1030,435,15,215);
	wall2 = new Wall(950,534,145,15);
	wall3 = new Wall(870,435,15,215);

	bin = createSprite(950,427,190,50);
	bin.addImage(binIMG);
	bin.scale = 0.7;

	var option = {

		isStatic: true

	}

	binBody = Bodies.rectangle(950,427,1,1,option);
	World.add(world,binBody);
	
	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);

	paper.display();
	  
	wall1.display();
	wall2.display();
	wall3.display();
	
	ground.display();

	bin.x = binBody.position.x;
	bin.y = binBody.position.y;

	keyPressed();
	drawSprites();

}

function keyPressed(){

	if (keyDown("UP_ARROW")){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:65,y:-105});

	}

}

