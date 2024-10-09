let img[];
let snd[];

let anger;
let sad;

let angersad;

function preload(){
    img[0] = loadImage('libraries/Error.png');
    img[1] = loadImage('libraries/Sad.png');
    snd[0] = loadSound('libraries/robot getting mad.mp3');
    snd[1] = loadSound('libraries/screaming robot mad.mp3');
    snd[2] = loadSound('libraries/robot dizzy.mp3');

    angersad = loadImage('libraries/Error.png');
}

function keyIsPressed();

if(angersad == img[0]){
    angersad == img[1];
} else {
    angersad = img[0];
}


function draw2() {
    image(img[0], 0, 0);
    
}



