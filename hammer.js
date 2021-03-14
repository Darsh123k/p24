class Hammer{
    constructor(x,y,width,height){
    var options = {
        'density':2
        'friction':1.0,
        'restitution':0.5,
    };
    this.body=bodies.rectangle(x,y,50,50,options)
    this.width=50
    this.height=50
    World.add(world.this.body)
display(){
    var pos=this.body.position;
    posX=mouseX
    posY=mouseY

    var angle=this.body.angle
push();
translate(posX,posY)
rotate(angle)
rectMode(CENTER)
fill(green)
rect(0,0,this.width,this.height)
}

}
};










































