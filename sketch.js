const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stick,ball,chain,flag;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    stick = new Ground(300,50,300,20);

    ball = new Box(300,300);

    chain = new Chain(stick.body,ball.body);

    flag = 0;
}

function draw(){
    background(0);
    Engine.update(engine);

    fill("brown");
    stick.display();
    ball.display();
    fill("green");
    chain.display();

     if(keyDown("space")){
         flag = 1;
         console.log(flag);
     }

    if(flag === 1){
         Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
    }
    
    if(keyDown(UP_ARROW)){
        flag = 0;
        Matter.Body.setPosition(ball.body,{x:300,y:300});
    }
}
