const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
var engine, world;
function setup(){
    var canvas = createCanvas(windowWidth/1,windowHeight/2);
    engine = Engine.create();
    world = engine.world;
    b1=new Bob(640,200,70)
    sling1=new Sling(b1.body,{x:580,y:70})
    b2=new Bob(715,200,70)
    sling2=new Sling(b2.body,{x:655,y:70})
    b3=new Bob(795,200,70)
    sling3=new Sling(b3.body,{x:730,y:70})
    b4=new Bob(875,200,70)
    sling4=new Sling(b4.body,{x:805,y:70})
    b5=new Bob(960,200,70)
    sling5=new Sling(b5.body,{x:880,y:70}) 
    g1= new Ground(730,70,400,20)
}

function draw(){
background(255);
Engine.update(engine);
g1.display()
    b1.display()
    sling1.display()
    b2.display()
    sling2.display()
    b3.display()
    sling3.display()
    b4.display()
    sling4.display()
    b5.display()
    sling5.display()
    
}
function mouseDragged(){
    Matter.Body.setPosition(b1.body,{x:mouseX, y:mouseY})
}