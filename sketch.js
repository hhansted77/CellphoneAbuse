
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
  
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 
}
function draw() {
  
  

  switch(state){
    
    case(0):
       if (showAlternateImage == true) {
        image(images[0], 0, 0)// show the alt image
      } 
      else {
        (showAlternateImage = false) 
          image(images[2], 0, 0)
      }
      

    break;
    case(1):

      draw2();

    break;
    case(2):

    
    break;
    case(3):

    
    break;
    case(4):

    
    break;
  } 
  
}
function keyPressed(){  
  const state = 0
  showAlternateImage = showAlternateImage ? false : true;
  console.log(showAlternateImage);

}


