class Paper
{
   constructor(x,y,r)
   {
      var options =
      {
         isStatic:false,
         restitution: .3,
         friction:.5,
         density:.3
      }
      this.radius = r;
      this.body = Bodies.circle(x, y, this.radius/2,options);
      this.image = loadImage("Images/paper1.png")
     
      World.add(world,this.body);

   }

display()
{
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
        
        //ellipseMode(CENTER);
        translate(pos.x,pos.y);
        strokeWeight(3);
		  fill(255,0,255)
        rotate(angle);
        imageMode(CENTER);
        //image(this.image,0,0,this.radius, this.radius)
        image(this.image,0,0,70,70);
        //ellipse(0,0,this.radius, this.radius)
    pop();

}




}