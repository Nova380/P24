
var ball,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1400,700);
	engine = Engine.create();
  world = engine.world;
  var ball_options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
ground = new Ground(600,700,800,100);
part1 = new Dustbin(912,575,25,150);
part2 = new Dustbin(999,636,150,30);
part3 = new Dustbin(1085,575,25,150);

ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball)
	Engine.run(engine);
  
}
function keyPressed(){
if( keycode === UP_ARROW){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  part1.display();
  part2.display();
  part3.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  if( keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  }
}



