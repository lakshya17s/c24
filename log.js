class Log{
    constructor(x,y,height,angle){
        var options = {
            restitution:0.3,
            density:0.5,
            friction:3,


        }
        this.body = Bodies.rectangle(x,y,20,height,options);
        World.add(world, this.body);
        Matter.Body.setAngle(this.body, angle);
        this.height = height;
    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     rect(0,0,20,this.height);
       pop();
    }
}