
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle = 60;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: .02,
    frictionAir:0.001
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ground = Bodies.rectangle(200,390,400,10,ground_options);
  World.add(world,ground);
  
  ground2 = Bodies.rectangle(200,200,400,10,ground_options);
  World.add(world,ground2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  console.log(ball)
  
  

  Matter.Body.rotate(ground2,angle);
  push();
  translate(ground2.position.x,ground2.position.y)
  rotate(angle);
  rect(0,0,400,20)
  pop();
  angle+=0.1;
  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 rect(ground.position.x,ground.position.y,400,20) 
}

