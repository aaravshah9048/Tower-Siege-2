class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          
      }
      this.image= loadImage("box.pong");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    
      console.log(this.body.speed);
      if(this.body.speed < 3){
        imageMode(CENTER);
        image(this.image,position.x,position.y,this.width,this.height);x
      }
      else{
        push();
        world.remove(world.this.body);
        tint(255,this.visiblity);
        image(this.image, this.body.position.x, this.body.position.y ,707,130);
        pop();
      }
    }
}