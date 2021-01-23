const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup(){
  var canvas = createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var groundoptions={
    isStatic:true
  }
  ground=Bodies.rectangle(200,100,50,50,groundoptions);
  World.add(world,ground);
  var balloptions={
    restitutin=1.0
  }
  ball=Bodies.circle(200,100,20,balloptions);
  World.add(world,ball);
}
function draw(){
  background(0);
  rectMode(CENTER);
  rect(200,200,50,50);
}