class Box {
  /** 
   * x and y:  x & y coordinates denoting the position of the Box object
   * width: width of box
   * height: height of box
   * color: color of the box
   */
  constructor(x, y, width, height, color) {
    
    var options = {
      /**options store the various properties that Box objects should possess */
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options); /**This created a rectangle shaped body */
    this.width = width;
    this.height = height;
    this.color = color;
    
    /**Adding the newly created body to the "world" created in sketch.js, using "World.add()" */
    World.add(world, this.body);
  }

  display(){
    /**
     * In the constructor above, a rectangle shaped body was created.
     * But the body by itself is not visible on screen, but it can affect other objects in its surroundings.
     * For eg: If one body without a display was made to fall on another visible body, we will see the 2nd body moving away due to the impact.
     * So we have to draw a simple rectangle with the same size as the body and move it whenever the body moves.
     * This rectangle will act as the display for the body created above.
     * That is being done in display()
     */

    var pos =this.body.position;
  
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill(this.color);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
