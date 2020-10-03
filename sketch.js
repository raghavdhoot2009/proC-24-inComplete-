
var ground;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
createCanvas(800, 400);
  
engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
groundSprite=createSprite(width/2, height-35, width,10);
groundSprite.shapeColor=color("yellow")
  
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);

   
    
    
boxPosition=width/2 + 100
boxY=310;
boxleftSprite=createSprite(boxPosition, boxY, 20,100);
boxleftSprite.shapeColor=color(255); 
boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
World.add(world, boxLeftBody); 
boxBase=createSprite(boxPosition+100, boxY+40, 200,20); 
boxBase.shapeColor=color(255); 
boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} ); 
World.add(world, boxBottomBody); 
boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
boxleftSprite.shapeColor=color(255);
boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} ); 
World.add(world, boxRightBody);

paper=new Paper (100,300,4);
Fill (255,0,255);
World.add(world,paper);
Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(0);
paper.display();
keyPressed();
drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:110,y:340});

}
}
  

