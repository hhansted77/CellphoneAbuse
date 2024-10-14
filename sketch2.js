let shakes = 0;
let shakey = 0;
let minimumShakes = 50;
let caseShakes = 100;
let caseShakes2 = 500;

function keyPressed() {
  console.log(state);
  console.log(shakes);
  if (key == "9") state = (state + 1) % 5;
  if (state == 0) {
    if (key == "1") {
      showAlternateImage = showAlternateImage ? false : true;
    }
  }
  //AUDIO KEYBINDS
  if (key == "q") {
    //chirp (happy)
    sounds[0].play();
  }

  if (key == "w") {
    //aawwuAAAWU (anger)
    sounds[1].play();
  }

  if (key == "e") {
    //ooooWWEAUUAUW*beep* (anger)
    sounds[2].play();
  }

  if (key == "r") {
    //sad oowoah oowoah oooooooowauuhh (dizzy/sad)
    sounds[3].play();
  }

  if (key == "t") {
    //mouse shriek (dizzy/angry)
    sounds[4].play();
  }

  if (key == "y") {
    sounds[5].play();
  }

  if (key == "u") {
    sounds[6].play();
  }
} //, 2000);

if (state == 1) {
  if (key == "1") {
    showAlternateImage = showAlternateImage ? false : true;
  }
}

function deviceShaken() {
  console.log(state);
  console.log(shakes);
  if (state == 2) shakes++;
  shakey++;
  if (shakes <= minimumShakes) {
    showAlternateImage == true;
  }
  if (shakes >= minimumShakes) {
    showAlternateImage == false;
    shakes = 0;
  }
  if (shakey >= caseShakes) {
    (state = state + 1) % 5;
    shakes = 0;
    shakey = 0;
  }

  if (state == 3) shakey++;
  if (shakey >= caseShakes2) {
    state = (state + 1) % 5;
    shakes = 0;
    shakey = 0;
  }
}
