class Paper
{
constructor(x,y){
    this.x =x
    this.y =y
    var options={
     
    ' restitution':0.3,
    'density':1.2,
    'friction':0
    }
    this.body = Bodies.circle(x,y,25,options)
    this.radius = 25;
    this.image=loadImage("paper.png")
    World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.radius);
    pop();
}
}
