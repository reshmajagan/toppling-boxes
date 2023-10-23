class Ground {
    constructor(x,y,width,height) {
      /** x and y:  x & y coordinates denoting the position of the Ground object */
      var options = {
          /**this makes the ground static */
          'isStatic': true,
          'friction': 1,
          'restitution': 0.5          
      }
      this.body = Bodies.rectangle(x,y,width,height,options); /** this creates a rectangle shaped body */
      this.width = width;
      this.height = height;
      World.add(world, this.body); /**this adds the new body to the "world" created before */
    }

    display(){
    /**
     * In the constructor above, a rectangle shaped body was created.
     * But the body by itself is not visible on screen, but it can affect other objects in its surroundings.
     * For eg: if the ground body without a display was made to stay in the middle of the canvas, and a box body with a display falls from the top of the screen, the box will fall on top of the ground and stop moving
     * So we have to draw a simple rectangle with the same size as the body and move it whenever the body moves. 
     * This rectangle will act as the display for the body created above.
     * That is being done in display()
     */

      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };