"use strict";

console.log("Hola soy JavaScript");
console.log("Bezier en JS");
var valor1;
for (var i; i < 10; i++) {
  console.log(i);
}
var numer01;
var constante = 23;
var nombre = 'Pablo Morales';
console.log('Hola soy ' + nombre);


function setup() {
  createCanvas(720, 400);

  // Remove the bezier stroke fills and establish a new
  // stroke weight. Change the color mode to HSB.
  noFill();
  strokeWeight(2);
  colorMode(HSB);
}

function draw() {
  describe(
    'Ten rainbow-colored lines in a bezier curve formation. The top anchors of the curves move with the cursor as it hovers over the black canvas.'
  );

  background(5);

  // Create 10 bezier lines with anchor points moving
  // with the X coordinate of the cursor.
  for (let i = 0; i < 200; i += 20) {
    // Add 10 to the line's hue value during
    // each iteration.
    strokeColor = i + 10;

    stroke(strokeColor, 50, 60);

    bezier(mouseX - i / 2, 0 + i, 410, 20, 440, 300, 240 - i / 16, 300 + i / 8);
  }
}