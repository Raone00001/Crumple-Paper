class BaseClass {
    constructor(x, y, radius) {
      var paper_options = {
          
        'isStatic':false,
        'restitution':0.3,
        'friction':0.9,
        'density':1.1

      }

      this.body = Bodies.circle(x, y, radius, paper_options);
      this.image = loadImage("Images/base.png");
      World.add(world, this.body);

    }

    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("Hotpink");
      imageMode(RADIUS);
      image(this.image,65, 11, 35, 35);
      pop();
                                                                                
    }
  }
  