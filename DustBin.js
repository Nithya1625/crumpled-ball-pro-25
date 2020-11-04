class DustBin
{
    constructor(x,y)
    {
        this.dustbinWidth = 180;
        this.dustbinheight = 100;
        this.wallthickness = 20;
        this.image = loadImage("Images/dustbingreen.png");

        var options={isStatic:true
                    // friction:1.0
                    }

        //this.bottomBody = Bodies.rectangle(x,y,this.dustbinWidth,200,options);
        this.bottomBody = Bodies.rectangle(x,y,200,20,options);
       
        this.leftWall =  Bodies.rectangle(x-this.dustbinWidth/2-this.wallthickness/2,
                                          y,this.wallthickness, this.dustbinheight,options);
        this.rightWall =  Bodies.rectangle(x+this.dustbinWidth/2+this.wallthickness/2,
                                          y,this.wallthickness, this.dustbinheight,options);     
                                          
        World.add(world,this.bottomBody);
        World.add(world,this.leftWall);
        World.add(world,this.rightWall);                                          
                                          
    }
display()
{   fill("red");
    
    //bottom rect
    //imageMode(CENTER);
       image(this.image,this.bottomBody.position.x-100,this.bottomBody.position.y-100,200,100);
   
       rectMode(CENTER);
       rect(this.bottomBody.position.x,this.bottomBody.position.y,200,20);
       rect(this.leftWall.position.x,this.leftWall.position.y-50,this.wallthickness,this.dustbinheight);
       rect(this.rightWall.position.x,this.rightWall.position.y-50,this.wallthickness,this.dustbinheight);
    
    
}


}