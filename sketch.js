
let state = 0;
let i = 0;
let images = [];
let showAlternateImage = true;
function preload(){
    images[0] = loadImage("libraries/Happi.png");
    images[1] = loadImage("libraries/Sad.png");
    images[2] = loadImage("libraries/Error.png");
    images[3] = loadImage("libraries/Dizzy.png");
    images[4] = loadImage("libraries/Ded.png")
    sounds[0] = loadSound("assets/robot getting mad.mp3")
    sounds[1] = loadSound("assets/screaming robot mad .mp3")
    sounds[2] = loadSound("assets/robot dizzy.mp3")
    sounds[3] = loadSound("assets/robotdeath.mp3")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 
}
function draw() {
  
  

  switch(state){
    
    case(0):
       if (showAlternateImage == true) {
        image(images[0], 0, 0)// show the alt image
        if (mouseIsPressed == true){
          chirp.play();
        }
      } 
      else {
        (showAlternateImage = false) 
          image(images[2], 0, 0)
      }
      
      //happy to angry
    break;
    case(1):

    //angry to sad
      if (key == ".") state = (state + 1);

    break;
  
   
    case(2):

    //sad to dizzy
    break;
    case(3):

    // dizzy to ded
    break;
    case(4):

    //ded 
    break;
  } 
  
}
function keyPressed(){  
  const state = 0
  showAlternateImage = showAlternateImage ? false : true;
  //angersad = angersad ? false : true;
  console.log(showAlternateImage);
  
}


function keyPressed(){
  if (state == 0); 
    (key == '1');
    showAlternateImage = showAlternateImage ? false : true;
  }




