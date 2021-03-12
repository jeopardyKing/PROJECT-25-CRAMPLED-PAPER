class paper{
    constructor(x,y,r){

       

        var options = {
            'isStatic' :false , 
            'restitution' : 0.5 ,
            'friction'  : 1 , 
            'density'  : 1.2
        }
    
        this.body=Matter.Bodies.circle(x,y,r,options);
        World.add(world,this.body)
        
        //assigning position
        var pos=this.body.position;
        pos.x=x;
        pos.y=y;

        //img
         
        this.img=loadImage("paper.png");

        

    }

    display(){

        //setting img 
       imageMode(CENTER)
       image(this.img,this.body.position.x,this.body.position.y,100,100)

       if(keyDown(UP_ARROW)){
           this.body.position.x= this.body.position.x+2;
           this.body.position.y=this.body.position.y-4;
       }

       if(keyDown(DOWN_ARROW)){
        this.body.position.x= this.body.position.x-2;
        this.body.position.y=this.body.position.y+4;
    }
    }

}