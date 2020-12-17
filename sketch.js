const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box16,box15,box14,box13,box12,box11,box10,box9,box8,box7,box6,box5,box4,box3,box2,box1;
var box25,box24,box23,box22,box21,box20,box19,box18,box17;
var ground1,ground2;
var polygon;
var slingshot;

function preload(){

polygonImage=loadImage("polygon.png");

}




function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    ground1 = new Ground(415,330,250,10);
    ground2 = new Ground(750,200,190,10);
    //1
    box16 = new Box(355,320,25,30);
    box15 = new Box(375,320,25,30);
    box14 = new Box(395,320,25,30);
    box13 = new Box(415,320,25,30);
    box12 = new Box(435,320,25,30);
    box11 = new Box(455,320,25,30);
    box10 = new Box(475,320,25,30);
    //2
    box9 = new Box(375,300,25,30);
    box8 = new Box(395,300,25,30);
    box7 = new Box(415,300,25,30);
    box6 = new Box(435,300,25,30);
    box5 = new Box(455,300,25,30);
    //3
    box4 = new Box(395,280,25,30);
    box3 = new Box(415,280,25,30);
    box2 = new Box(435,280,25,30);
    //4
    box1 = new Box(415,260,25,30);

    //1
    box25 = new Box(700,190,25,30);
    box24 = new Box(725,190,25,30);
    box23 = new Box(755,190,25,30);
    box22 = new Box(775,190,25,30);
    box21 = new Box(795,190,25,30);
    //2
    box20 = new Box(725,170,25,30);
    box19 = new Box(755,170,25,30);
    box18 = new Box(775,170,25,30);
    //3
    box17 = new Box(755,150,25,30);

    slingshot = new SlingShot(this.polygon,{x:100,y:200});



}




    function draw(){
        background(rgb(247, 44, 162));
        Engine.update(engine);

        imageMode(CENTER);
        image(polygonImage,polygon.position.x,polygon.position.y,40,40);

        
        ground1.display();
        ground2.display();
        fill("rgb(37, 247, 243)")
        box16.display();
        box15.display();
        box14.display();
        box13.display();
        box12.display();
        box11.display();
        box10.display();
        fill("rgb(6, 221, 28)")
        box9.display();
        box8.display();
        box7.display();
        box6.display();
        box5.display();
        fill("rgb(247, 240, 37)")
        box4.display();
        box3.display();
        box2.display();
        fill("rgb(211, 2, 2)")
        box1.display();
        fill("rgb(32, 4, 244)")
        box25.display();
        box24.display();
        box23.display();
        box22.display();
        box21.display();
        fill("rgb(20, 160, 1)")
        box20.display();
        box19.display();
        box18.display();
        fill("rgb(97, 1, 160)")
        box17.display();

        textSize(20);
        fill("black");
        stroke("black");
        strokeWeight(2);
        text( "Drag the Hexagon Stone and Release it, to launch it towards the blocks",50,30);
    }

    function mouseDragged(){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    }
    
    
    function mouseReleased(){
        slingshot.fly();
    }
    function keyPressed(){
        if(keyCode === 32){
        slingshot.attach(this.polygon);
        
        }
    }
