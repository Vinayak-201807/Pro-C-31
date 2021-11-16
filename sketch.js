const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg,ground;
var b1,b2,b3,b4,b5,b6;
var c1,c2,c3,c4,c5;
var rock;

function preload() {
  bg = loadImage("images/bg.jpg");
}
function setup() {
  createCanvas(1200, 400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(600,390,1200,10);
  b1 = new Boggie(50,70,50,50);
  b2 = new Boggie(150,70,50,50);
  b3 = new Boggie(250,70,50,50);
  b4 = new Boggie(350,70,50,50);
  b5 = new Boggie(450,70,50,50);
  b6 = new Boggie(550,70,50,50);

  c1 = new Chain(b1.body,b2.body);
  c2 = new Chain(b2.body,b3.body);
  c3 = new Chain(b3.body,b4.body);
  c4 = new Chain(b4.body,b5.body);
  c5 = new Chain(b5.body,b6.body);

  rock = new Rock(1000,325,100,100);
}

function draw() {
  background(bg);
  Engine.update(myEngine);

  b1.show()
  b2.show()
  b3.show()
  b4.show()
  b5.show()
  b6.show()

  c1.show()
  c2.show()
  c3.show()
  c4.show()
  c5.show()

  rock.show()

  if(keyDown(RIGHT_ARROW)) {
    Matter.Body.applyForce(b6.body,b6.body.position,{
      x:0.5,y:0     
    })
  }

}
