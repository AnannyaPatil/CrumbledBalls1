//To create a paper class
class Paper{
//To add the constructor to it    
    constructor(x,y,r){
//To add restitution(bounceiness),friction and density    
    var options ={
    restitution : 1,
    friction : 0.5,
    density : 1.2  
  }  
//To keep the x,y axis,radius,height at random
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options);
//To add it to the world  
    World.add(world,this.body);
  }
  
//To display it  
  display(){
    var paperPos = this.body.position;
    push();
    translate(paperPos.x,paperPos.y);
    rectMode(CENTER);
    strokeWeight(5);
    fill(135,206,235);
    ellipse(0,0,this.r,this.r);
    pop();
}
 }