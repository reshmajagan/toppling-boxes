# TopplingBoxes

The toppling boxes are made using p5.js library and matter.js physics engine. The objective is to get a basic understanding of the libraries and how they could be used.

This project creates 3 bodies using the physics engine - two boxes and one ground. Two boxes falls from the top of the screen onto the ground. They collide and topple over.


## Basic project structure

Our primary files include:
* index.html
* sketch.js

In index.html file, we  link all the javascript libraries, classes, stylesheets and sketch.js. Among these, the sketch.js is placed in the body section, the rest are in the head section of html.

Since p5.js is a JavaScript library for creative coding, we have our main functions in sketch.js:
* function setup()
* function draw()

In function setup(), we will create the canvas, the physics engine and all of the objects needed. This function executes only once.

In function draw(), we draw the displays for each of the objects(or bodies). This function executes over and over again, redrawing the contents put inside the function.

To use p5.js and matter.js you can do one fo two things:
1. Add the minnified files directly to your directory as has been done in this project, or
2. Add the CDN links for the libraries within index.html.

Both can be found at the official sites of p5.js (https://p5js.org/download/) and matter.js (https://github.com/liabru/matter-js/wiki/Getting-started)

