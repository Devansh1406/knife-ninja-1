const Engine= Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies       
                                    
var engine1
var world
var wheel
var wheelOptions
var angle=60

function setup() {
  createCanvas(800,400);
engine1=Engine.create()
world=engine1.world
wheelOptions={
isStatic:true
}
wheel=Bodies.circle(400,200,100,wheelOptions)
World.add(world,wheel)

}

function draw() {
  background(forest);
  Engine.update(engine1)
  imageMode(CENTER)


  Matter.Body.rotate(wheel,angle)
  angle=angle+5
  
push()
  translate(wheel.position.x,wheel.position.y)
rotate(angle)
image(wheelimg,0,0,100,100)
pop()







  drawSprites();
}

function preload(){
forest=loadImage("forestbg.jpg")
wheelimg=loadImage("wheel1.jpg")
}