const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine,world;

var ball,stick;

var pendulum;

var gameState = "release";

function setup() {

  createCanvas(800,400);

  engine =Engine.create();
  world = engine.world;

  ball = Bodies.circle(400,300,50);

  var options = {
    'isStatic':true
  }

 stick = Bodies.rectangle(400,50,400,10,options);

  var options = {
    bodyA: ball,
    bodyB: stick,
    stiffness: 0.04,
    length: 10
 } 

  pendulum = Constraint.create(options);

}

function draw() {

  background(255,255,255); 

  Engine.update(engine);

  rectMode(CENTER);
  rect(stick.position.x,stick.position.y,400,10);

  line(stick.position.x,stick.position.y,ball.position.x,ball.position.y);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);

  if(gameState === "attach"){
     Matter.Body.setPosition(ball,{ x: mouseX , y: mouseY})
  }

  if(gameState === "release"){
      Matter.Body.setPosition(ball,{ x: 400 , y: 300})
  }
  

}

function keyPressed(){
  if(keyCode === 32){
   gameState = "attach";
  }else{
    if(keyCode === 13){
      gameState = "release";
    }
  }
}