class Sling{
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:1.5,
    length:200
    }
    this.pointB=pointB
    this.Rope=Constraint.create(options)
    World.add(world,this.Rope)
    }
    display(){
    push()
    stroke("black")
    line(this.Rope.bodyA.position.x,this.Rope.bodyA.position.y,this.pointB.x,this.pointB.y)
    pop()
    }
    }