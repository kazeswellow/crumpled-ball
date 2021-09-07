
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;

function preload()
{

}

function setup() {
	createCanvas(1000, 700);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
	groundObj=new ground(width/2,670,width,20);
    leftSide = new ground(1100,600,20,120);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  drawSprites();
}