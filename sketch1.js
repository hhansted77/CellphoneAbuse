
let snd = [];
let chirp;

let angersad = true;

function preload(){

    snd[0] = loadSound('libraries/robot getting mad.mp3');
    snd[1] = loadSound('libraries/screaming robot mad.mp3');
    snd[2] = loadSound('libraries/robot dizzy.mp3');
    snd[3] = loadSound('libraries/shriek.mp3')
    chirp = loadSound('libraries/wake-up-the-robot-84894.mp3')
}

case(1):
if (showAlternateImage == true){
  image(images[2], 0, 0);
} else {
  (showAlternateImage = false);
  image(images[1], 0, 0);
}


break;
case(2):
if (deviceShaken){
    (showAlternateImage == false);
    image(images[3], 0, 0);
  } else {
    (showAlternateImage == true);
    image(images[1], 0, 0);
  }
}


break;