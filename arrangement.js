/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [250, 198, 65]; // yellow
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1); // yellow
  noStroke();

  // draw a 3 * 2 grid of faces
  let w = canvasWidth / 3.5;
  let h = canvasHeight / 2;
  for(let i=0; i<2; i++) { // rows
    for(let j=0; j<3; j++) { // columns
      let y = h/2 + h*i;
      let x = w/2 + w*j;
     
        // center face
        let eyes = int(random(0, 3));
        let mouths = int(random(0, 3));
        let poses = int(random(0, 4));
        let props = int(random(0, 4));
        let rotation = random(-5, 5); 
        let backgroundColour = random(220, 250); 
        let colourvalue = random (0, 100);
        if (colourvalue < 40) {
          backgroundColour = 250;
        } else {
          backgroundColour = random(220, 249);
        }

        push();
        translate(x * 1.15, y); // center the arrangement
        scale(w/25, h/25);
        
        myface(eyes, mouths, poses, rotation, props, backgroundColour);
        pop();

    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
