class Box{
    constructor(x,y){

        var options = {
            friction: 1,
            density: 1,
            restitution:0.8
        }
        
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);


    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill(255);
        ellipse(0,0,50,50);
        pop();

    }
}