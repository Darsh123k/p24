class rubber {
 constructor(x,y,width,height){
 var options = {
     'restitutuion': 1.3
     'density': 1
     'friction':5
 }
 this.body=Bodies.circle(x,y,20,20,options)
this.width=width;
this.height=height;
Matter.Body.setAngle(this.body.angle)
World.add(world,this.body)
display(){
    push;
    var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(black)
      rect(0,0,this.width,this.height)
      Pop;
}
 };
