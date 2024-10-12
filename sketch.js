let state = 0;
let i = 0;
let images = [];
let showAlternateImage = true;
let chirp;
let sounds = [];

function preload() {
  images[0] = loadImage("libraries/Happi.png");
  images[1] = loadImage("libraries/Sad.png");
  images[2] = loadImage("libraries/Error.png");
  images[3] = loadImage("libraries/Dizzy.png");
  images[4] = loadImage("libraries/Ded.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  sounds[0] = loadSound("libraries/robot getting mad.mp3");
  sounds[1] = loadSound("libraries/screaming robot mad .mp3");
  sounds[2] = loadSound("libraries/robot dizzy.mp3");
  sounds[3] = loadSound("libraries/robotdeath.mp3");
  chirp = loadSound("libraries/wake-up-the-robot-84894.mp3");

}
function draw() {
  switch (state) {
    case 0:
      if (showAlternateImage == true) {
        image(images[0], 0, 0); // show the alt image
      } else {
        showAlternateImage = false;
        image(images[2], 0, 0);
      }

      //happy to angry

      //if (mouseIsPressed) {
       // chirp.play();
      //}

      break;
    case 1:
      if (showAlternateImage == true) {
        image(images[2], 0, 0); // show the alt image
      } else {
        showAlternateImage = false;
        image(images[1], 0, 0);
      }
      //angry to sad
      if (key == ".") state = state + 1;

      break;

    case 2:
      if (showAlternateImage == true) {
        image(images[1], 0, 0); // show the alt image
      } else {
        showAlternateImage = false;
        image(images[3], 0, 0);
      }
      //sad to dizzy
      break;
    case 3:
      image(images[3], 0, 0); // show the alt image
      // dizzy to ded
      break;
    case 4:
      image(images[4], 0, 0); // show the alt image
      //ded
      break;
  }
}
