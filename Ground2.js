class Ground2 {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,options);
     
      World.add(world, this.body);
    }
    display(){
      
      rectMode(CENTER);
      fill("brown");
      rect(0,0, this.width, this.height);
      
    }
  };