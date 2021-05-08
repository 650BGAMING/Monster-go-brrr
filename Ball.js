class Ball{
    constructor(x,y,width,height,angle){
        var options = {
            'density': 1,
            'frictionAir': 0.005           
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Superhero01.png");

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;       
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);              
        stroke("green");
        fill(255);
        imageMode(CENTER);
        image(this.image,0,0,500,300)
        pop();
    }
}