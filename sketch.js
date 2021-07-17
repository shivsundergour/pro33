const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, r,boy,boyimg,sound1;
var snow = []
var newSnow = []



function preload(){
  bg = loadImage("snow1.jpg");
  boyimg = loadAnimation("snow_boy-0.png","snow_boy-1.png","snow_boy-2.png","snow_boy-3.png","snow_boy-4.png","snow_boy-5.png","snow_boy-6.png","snow_boy-7.png","snow_boy-8.png");
  sound1 = loadSound("sound2.wav");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  boy = createSprite(550,250);
  boy.addAnimation("boy",boyimg)
}

function draw() {
  if(bg)
  background(bg); 
  Engine.update(engine);
  sound1.loop();
  fall()
  sFall()
  for(r = 0; r<snow.length; r++){
    snow[r].display()
  }
  for(s = 0; s<snow.length; s++){
    newSnow[s].display()
  }
  drawSprites();
}

function fall(){
  if(frameCount%10===0){
    snow.push(new Snowfall(random(0,800),-30,50,50))
  }
}

function sFall(){
  if(frameCount%10===0){
    newSnow.push(new Snowfall2(random(0,800),-30,40,40))
  }
}
