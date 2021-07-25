class Hammer
{
    constructor(x,y,height,angle){
        var options={
            'density':10,
            'friction':1.0,
            'restitution':0.5,

        }
        this.body=Bodies.rectangle(x,y,150,height,options);
        World.add(world,this.body)
        Matter.Body.setAngle(this.body,angle);
        this.width=150;
        this.height=height;

    }
    display(){
var pos=this.body.position;
pos.x=mouseX;
pos.y=mouseY;
var angle=this.body.angle;
push();
rotate(angle);
translate(pos.x,pos.y);
rectMode(CENTER);
fill("orange");
rect(0,0,this.width,this.height);
pop();

    }
}