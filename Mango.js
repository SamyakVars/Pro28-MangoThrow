class Mango{

    constructor(x, y, r, w, h){

        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.r = r
        this.w = w
        this.h = h

        this.body = Bodies.circle(x, y, r, options)
        this.image = loadImage("sprites/mango.png")
    }

    display(){
        var pos = this.body.position;

        

        imageMode(CENTER)
        image(this.image, pos.x + 5, pos.y, this.w, this.h)

        ellipse(pos.x, pos.y, this.r)
    }
}