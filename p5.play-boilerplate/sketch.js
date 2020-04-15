const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine,world;

var ball,stick;

var pendulum;

function setup() {

  createCanvas(800,400);

  engine =Engine.create();
  world = engine.world;

  var ball = Bodies.circle(400,300,100);

  var options = {
    'isStatic':true
  }

  var stick = Bodies.rectangle(400,50,100,10,options);

  var options = {
    bodyA: bodyA,
    bodyB: bodyB,
    stiffness: 0.04,
    length: 10
 } 

  bodyA = ball;
  bodyB = stick;

  var pendulum = createConstraint(options);

}

function draw() {

  background(255,255,255); 

  ellipseMode(radius);
  ellipse(ball.position.x,ball.position.y,100,100);

  rectMode(CENTER);
  rect(stick.position.x,stick.position.y,100,10);

  Engine.update(engine);

}