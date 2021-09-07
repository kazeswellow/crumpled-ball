const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var btn1,btn2;

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world; 
  
  ground =new Ground(200,390,1700,20);
  right = new Ground(990,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,1700,20);
  var ball_options = {
    restitution:0.95
  }
  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  btn1=createImg("right.png");
  btn1.position(300,30);
  btn1.size(50,50)
  btn1.mouseClicked(hforce);

  btn2=createImg("up.png");
  btn2.position(30,30);
  btn2.size(50,50)
  btn2.mouseClicked(vforce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20,20);
  Engine.update(engine);
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}