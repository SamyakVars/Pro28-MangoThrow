class Stone{

    constructor(x, y, r){

        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        

        this.body = Bodies.circle(x, y, r, options)

        this.r = r

        World.add(world, this.body)
    }


    display(){
        var pos = this.body.position;

        fill(0)

        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.r)
        

    }

    
}