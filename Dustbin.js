//To create a dustbin class
class Dustbin {
//To add the constructor to it
    constructor (x,y,width,height)
    {
//To make the dustbin still 
    var options = {isStatic: true}
//To keep the x,y axis,width,height at random
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
//To add it to the world
    World.add(world, this.body);
    }
//To display it
    display()
    {
    rectMode(CENTER);
    fill(255,218,185);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
} 