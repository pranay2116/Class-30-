class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    // giving the maximum value to the pig's visiblity 
    this.Visiblity = 255
  }
  display()
  {
    console.log(this.body.speed);
    // to make the pigs disapper after the collision 
    if (this.body.speed<3)
    {
      super.display();  
    } 
    else 
    {
      World.remove(world,this.body);
      push();
      // to make the pigs to disappear slowly 
      // 255 is the full visiblity and 0 is the least so gradually it will become zero
      this.Visiblity = this.Visiblity-5;
      // it is an inbuilt function 
      // visit the following link https://p5js.org/reference/#/p5/tint
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
}