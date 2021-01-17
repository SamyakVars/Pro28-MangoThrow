class Ground{

    constructor(x, y, w, h){
        var options = {
            isStatic: true,
            friction: 1
        }


        this.w = w
        this.h = h

        this.body = Bodies.rectangle(x, y, w, h, options)

        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position



        fill(0)
        rectMode(CENTER)
        rect(pos.x, pos.y, this.w, this.h)
    }
}