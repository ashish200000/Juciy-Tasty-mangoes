class launcher{
   constructor(bodyA,pointB){
       var  options = {
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.01,
           length:10
       }
       
       this.pointB=pointB
       this.launcher = Constraint.create(options)
       World.add(world,this.launcher)
   }
   
    fly(){this.launcher.bodyA=null}
    
    Launch(bodyA){
        this.bodyA.launcher.bodyA = bodyA
    }
   
        attach(bodyA){ this.launcher.bodyA=body; } 
    

    display(){
     
          var pos = this.body.position;
        
        if(this.launcher.bodyA) {
         var pointA=this.bodyA.position;
          var pointB=this.pointB.position;
          strokeWeight(2);
          line(pointA.x,pointA.y,pointB.x,pointB.y);

         }
        
    }
}