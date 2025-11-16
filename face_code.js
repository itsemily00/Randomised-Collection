/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

/*  tilt_value is in degrees eye_value is an integer number of eyes: either 0, 1
 * , 2, or 3 mouth_value is how open the mouth is and should generally range fro
 * m 0.5 to 10

 */
function myface(eyes, mouths, poses, rotation, props, backgroundColour) {
    //********Set up********//
    angleMode(DEGREES);
    rotate(rotation);
    let centerX = 0;
    let eyeSizeX = 3;
    let eyeSizeY = 4;
    let frogEyeX = -1;
    let eyeRadiX = eyeSizeX / 2;
    let eyeDistance = 2;
    let photoSizeX = 18;
    let photoSizeY = 15;
    //colors
    let darkGery = color("#262525");
    let yellow = color("#fac641");
    let darkYellow = color("#c99d2c");
    let brightYellow = color("#f7e988");
    let creamy = [240, backgroundColour, 217];
    let red = color("#eb4b83");
    let blue = color("#4bb5eb");
    let green = color("#4ccfa8");
    let redNose = color("#f0351d");

    //********Draw the photo frame********
    // photo shadow
    push();
    angleMode(DEGREES);
    rotate(3);
    translate(0.7, 0.7);
    noStroke();
    fill(darkYellow);
    rectMode(CENTER);
    rect(centerX, 0, photoSizeX, photoSizeY);
    pop();

    // drawing photo stacks
    push();
    angleMode(DEGREES);
    rotate(3);
    stroke(0);
    strokeWeight(0.2);
    fill(255);
    rectMode(CENTER);
    rect(centerX, 0, photoSizeX, photoSizeY);
    pop();

    push();
    angleMode(DEGREES);
    rotate(-2);
    stroke(0);
    strokeWeight(0.2);
    fill(255);
    rectMode(CENTER);
    rect(centerX, 0, photoSizeX, photoSizeY);
    pop();

    // photo outer line
    push();
    stroke(0);
    strokeWeight(0.2);
    fill(255);
    rectMode(CENTER);
    rect(centerX, 0, photoSizeX, photoSizeY);
    pop();

    // photo background
    push();
    noStroke();
    fill(creamy);
    rectMode(CENTER);
    rect(centerX, 0, photoSizeX * 0.8, photoSizeY * 0.8);
    pop();

    //********props********//
    if (props == 2) { 
    // balloon background
        balloon(-3, -1, blue);
        balloon(-5, 0, red);
        balloon(0.5, -3.8, green);
        balloon(3.8, -2.8, red);
        balloon(2.5, -2, yellow);
        balloon(5, 0, blue);
    }
    //********Draw the frog********
    // torso
    noStroke();
    fill(darkGery);
    rectMode(CENTER);
    rect(centerX, 4, 4, 4);

    // head
    noStroke();
    fill(darkGery);
    ellipse(frogEyeX, 1, eyeSizeX, eyeSizeY); // space for eyes
    ellipse(frogEyeX + eyeDistance, 1, eyeSizeX, eyeSizeY);
    ellipse(centerX, 2.5, eyeSizeX * 2, eyeSizeY * 0.75); // space for mouth

    fill(255); // eyes
    ellipse(frogEyeX / 0.9, 0.8, eyeSizeX * 0.6, eyeSizeY * 0.7); // left
    ellipse(frogEyeX * 0.9 + eyeDistance, 0.8, eyeSizeX * 0.6, eyeSizeY * 0.7);

    //*****eye expressions*****//
    if (eyes == 0) {
        // looking right
        push();
        noStroke(); // looking right
        fill(darkGery);
        ellipse(frogEyeX / 1.2, 0.8, eyeSizeX * 0.2, eyeSizeY * 0.4);
        ellipse(
            frogEyeX / 1.2 + eyeDistance * 1.1,
            0.8,
            eyeSizeX * 0.2,
            eyeSizeY * 0.4
        );
        pop();

    } else if (eyes == 1) {
        // wink eyes
        push();
        stroke(darkGery);
        strokeWeight(0.3);
        line(frogEyeX / 1.2, 0.8, (frogEyeX - eyeRadiX) * 0.5, 1); // left
        line(frogEyeX / 1.2, 0.8, (frogEyeX - eyeRadiX) * 0.5, 0.6);
        line(
            frogEyeX / 1.2 + eyeDistance * 1.1,
            0.7,
            frogEyeX / 1.2 + eyeDistance * 1.1,
            0.9
        ); // right
        pop();

    } else if (eyes == 2) {
        // smiley eyes
        push();
        noFill();
        stroke(darkGery);
        strokeWeight(0.3);
        angleMode(DEGREES);
        arc(frogEyeX / 0.9, 1, 0.5, 0.8, 180, 0);
        arc(frogEyeX * 0.9 + eyeDistance, 1, 0.5, 0.8, 180, 0);
        pop();

    }

    //*****poses*****//
    if (poses == 0) {
      // arms down
        push();
        noFill();
        stroke(darkGery);
        strokeWeight(0.6);
        angleMode(DEGREES);
        arc(frogEyeX * 1.3, 5.3, 2.5, 4, 160, 240); // arms
        arc(-frogEyeX * 1.3, 5.3, 2.5, 4, 240, 20);
        pop();

    } else if (poses == 1) { 
      // peace sign
        noFill();
        stroke(darkGery);
        strokeWeight(0.6);
        strokeJoin(ROUND);
        angleMode(DEGREES);
        arc(frogEyeX * 2, 1.9, 3.5, 4, 90, 170); // left arm
        arc(frogEyeX * -2, 4.7, 3, 1.5, 270, 90); // right arm

        push(); // fist
        fill(darkGery);
        noStroke();
        ellipse(-3.7, 2.5, 1);
        pop();

        push(); // "peace" fingers
        noFill();
        stroke(darkGery);
        strokeWeight(0.4);
        strokeJoin(ROUND);
        line(-3.7, 2.5, -4, 1.9);
        line(-3.6, 2.5, -3.4, 1.9);
        pop();

    } else if (poses == 2) { 
      // holding a balloon
        push(); // left arm
        noFill();
        stroke(darkGery);
        strokeWeight(0.6);
        strokeJoin(ROUND);
        angleMode(DEGREES);
        rotate(-20);
        arc(frogEyeX * 3.3, 3.75, 2, 1.5, 90, 270);
        pop();

        push(); // right arm
        noFill();
        stroke(darkGery);
        strokeWeight(0.6);
        strokeJoin(ROUND);
        angleMode(DEGREES);
        arc(frogEyeX * -2.5, 3, 3, 2, 340, 120);
        pop();

        push(); // fist
        fill(darkGery);
        noStroke();
        ellipse(3.9, 2.6, 0.8);
        pop();

        balloon(4, -3, red);

    }

    //*****mouth expressions*****//
    if (mouths == 0) {
        // smile
        noFill();
        stroke(255);
        strokeWeight(0.3);
        angleMode(DEGREES);
        arc(centerX, 2.8, 2, 1, 2, 110);
    } else if (mouths == 1) {
        // circle mouth
        noFill();
        stroke(255);
        strokeWeight(0.3);
        ellipse(centerX, 3, 0.8, 1);
    } else if (mouths == 2) {
        // laughing mouth
        fill(255);
        noStroke();
        angleMode(DEGREES);
        arc(centerX, 2.5, 1.5, 2, 0, 180, CHORD);
    }

    //*****props*****//
    if (props == 0) {
        bowtie(0, 4.2);
    } else if (props == 1) {
        glasses(-1.1, 1.1, brightYellow);
    } else if (props == 3) {
        glasses(-1.1, 1.1, blue);
    }

    //*****poses*****//
    if (poses == 3) { 
      // holding a clown nose
        noFill();
        stroke(darkGery);
        strokeWeight(0.6);
        strokeJoin(ROUND);
        angleMode(DEGREES);
        arc(frogEyeX * 2.6, 2.2, 2, 4, 50, 130); // left arm
        arc(frogEyeX * -2, 4.7, 3, 1.5, 270, 90); // right arm

        push(); // stick
        noFill();
        stroke(255);
        strokeWeight(0.2);
        line(-3.7, 2.8, 0, 2.4);
        pop();

        push(); // nose
        fill(redNose);
        noStroke();
        ellipse(0, 2.4, 2);
        pop();

        push(); // fist
        fill(darkGery);
        noStroke();
        ellipse(-3.5, 2.8, 1);
        pop();
    }

    //********Draw the photo frame********//
    push(); // photo frame
    stroke(0);
    strokeWeight(0.2);
    noFill();
    rectMode(CENTER);
    rect(0, 0, photoSizeX * 0.8, photoSizeY * 0.8);
    pop();

}

function balloon(x, y, balloonColour) {
    let darkGery = color("#262525");
    stroke(darkGery);
    strokeWeight(0.2);
    strokeJoin(ROUND);
    fill(balloonColour);
    ellipse(x, y, 3, 4); // balloon
    triangle(x - 0.5, y + 2.5, x, y + 2, x + 0.5, y + 2.5); // knot
    line(x, y + 2.5, x, y + 6); // string
}

function bowtie(bowtieX, bowtieY) {
    fill(255);
    noStroke();
    triangle(
        bowtieX - 1,
        bowtieY - 0.5,
        bowtieX - 1,
        bowtieY + 0.5,
        bowtieX,
        bowtieY
    );
    triangle(
        bowtieX + 1,
        bowtieY - 0.5,
        bowtieX + 1,
        bowtieY + 0.5,
        bowtieX,
        bowtieY
    );
}

function glasses(glassesX, glassesY, glassesColour) {
    push();
    noFill();
    strokeWeight(0.2);
    stroke(glassesColour);
    angleMode(DEGREES);
    // left
    arc(glassesX, glassesY, 2, 3, 0, 180, CHORD);
    // shades
    line(glassesX - 0.5, glassesY, glassesX - 0.5, glassesY + 1.3);
    line(glassesX, glassesY, glassesX, glassesY + 1.5);
    line(glassesX + 0.5, glassesY, glassesX + 0.5, glassesY + 1.3);
    // right
    arc(glassesX + 2.2, glassesY, 2, 3, 0, 180, CHORD);
    // shade
    line(glassesX + 1.7, glassesY, glassesX + 1.7, glassesY + 1.3);
    line(glassesX + 2.2, glassesY, glassesX + 2.2, glassesY + 1.5);
    line(glassesX + 2.7, glassesY, glassesX + 2.7, glassesY + 1.3);
    pop();
}
