class Slingshot{


    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.001
        }

        this.bodyB = bodyB
        this.bodyA = bodyA
        
        this.constraint = Matter.Constraint.create(options);
        World.add(world, this.constraint);
    }
    
    attach(body){
        this.constraint.bodyA = body;
    }
    
    fly(){
        this.constraint.bodyA = null;
    }

    display(){

        var pointA = this.bodyA;
        var pointB = this.bodyB;

        push();
            
        stroke(48,22,8);
        strokeWeight(7);
        line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
        line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
        pop();
    }
    
}
