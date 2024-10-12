let shakes = 0;
let shakey = 0;
let minimumShakes = 50;
let caseShakes = 100;

function keyPressed() {
    console.log(state);
    console.log(shakes);
    if (key == "9")
    state = (state + 1) % 5;
    //setTimeout(function () {
    if (state == 0)
      if (key == "1") {
        showAlternateImage = showAlternateImage ? false : true;
      }

//AUDIO KEYBINDS
if (key == 'q'){
  sounds[0].play();
}



  }//, 2000);

  if (state == 1)
    if (key == "2") {
      showAlternateImage = showAlternateImage ? false : true;
    }
 
function deviceShaken(){
  if (state == 2)
    shakes++;
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
  //}
  if (state == 3) 
    shakey++;
  if (shakey >= caseShakes) {
      state = (state + 1) % 5;
      shakes = 0;
      shakey = 0;
    }
  
}
  
