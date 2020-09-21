var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

    var Engine;
    var world;
    var particles = [];

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var p = new particle(300,50,10);
  particles.push(p);
}

function draw() {
  background(51); 
  engine.update();
  particles[0].show();
  drawSprites();
}