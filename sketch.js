// NameSpacing or alias or renaming the modules of a library
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine, world;
var ground;
var ball;
function setup() {
  createCanvas(1200, 600);

  myEngine = Engine.create();
  console.log("my Engine object", myEngine);

  world = myEngine.world;

  // JSON object - Java Script Object Notation
  // It can take multiple values with one variable
  // key : value pairs seperated by comma
  var options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(600, 580, 1200, 20, options);
  World.add(world, ground);

  console.log("ground body", ground);
  var ball_options = {
    restitution: 2,
  };
  ball = Bodies.circle(600, 80, 20, ball_options);
  World.add(world, ball);
  console.log("ball body", ball);
}

function draw() {
  background("lightblue");

  Engine.update(myEngine);

  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 1200, 20);

  ellipseMode(RADIUS);
  fill("white");
  ellipse(ball.position.x, ball.position.y, 20, 20);
}
