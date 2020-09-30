const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world, ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 390, 600, 20, ground_options);
  World.add(world, ground);
 var options = {
restitution: 2.1290810928347
 }
  ball = Bodies.circle(200, 100,30,options)
World.add(world,ball);
console.log(ground);
}

function draw() {
  background(0);
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 30);
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y, 600,20);
}