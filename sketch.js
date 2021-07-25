
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer;
var plane;
var stone;
var rubber;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9;
var iron;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(400,350,50,PI/2);
plane=new Plane(400,650,800,20);
stone=new Stone(400,500,100,100);
rubber=new Rubber(500,620,60);
sand1=new Sand(300,620,6);
sand2=new Sand(301,620,6)
sand3=new Sand(303,620,6);
sand4=new Sand(304,620,6);
sand5=new Sand(306,620,6);
sand6=new Sand(308,620,6);
sand7=new Sand(309,620,6);
sand8=new Sand(310,620,6);
sand9=new Sand(311,620,6);
iron=new Iron(315,620,70,50);

	Engine.run(engine);
  
}


function draw() {
	
  background("lightblue");
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
 sand7.display();
 sand8.display();
 sand9.display();
 iron.display();
}



