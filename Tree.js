class Tree{

    constructor(x, y){

        this.x = x
        this.y = y
        this.image = loadImage("sprites/tree.png")
    }

    display(){
        image(this.image, this.x, this.y, 300, 330)
    }


}