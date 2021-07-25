class Sand{
    constructor(x,y,width){
        var options={
            'density':1,
            'friction':5,
            'restitution':1.3,

        }
        this.body=Bodies.circle(x,y,width,options);
        World.add(world,this.body);
        this.width=width;
        

    }
    display(){
var pos=this.body.position;
rectMode(CENTER);
fill("red");
circle(pos.x,pos.y,this.width);


    }

}