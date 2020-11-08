//To create a ground class
class Ground {
//To add the constructor to it
    constructor(x,y,width,height) {
//To make the ground still
    var options = {
    isStatic: true
}
//To keep the x,y axis,width,height at random
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
//To add it to the world   
    World.add(world, this.body);
}
//To display it
    display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(72,45,20);
    rect(pos.x, pos.y, this.width, this.height);
}
};