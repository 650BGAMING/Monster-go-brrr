class Monster{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.8,
            'friction': 0.3,
            'density': 0.04
            
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Monster-01.png");

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);       
        strokeWeight(4);
        stroke("red");
        fill(255);         
        imageMode(CENTER);
        image(this.image,0,0,500,500)
        pop();
    }
}