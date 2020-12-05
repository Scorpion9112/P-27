class Bob{
    constructor(x,y){
        var  options={
            frictionAir:0.0,
            density:1,
            restitution:1,
            friction:0,
            slop:1,
            inertia:Infinity
         }
         this.body=Bodies.circle(x,y,20,options)
         
         
         World.add(world,this.body)
        }
         display(){
             fill("pink")
             push()
      translate(this.body.position.x,this.body.position.y)
      rotate(this.body.angle)
      ellipse(0,0,75,75)
      pop()
         }
         
       }