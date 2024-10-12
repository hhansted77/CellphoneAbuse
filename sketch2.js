let shakes = 0;
let shakey = 0;
let minimumShakes = 5;
let caseShakes = 10;

function keyTyped(){
    setTimeout (function() {
    if (state == 0)
        if (key == '1'){
            
            showAlternateImage = showAlternateImage ? false : true; 
}
}, 2000);

    if (state == 1)
        if (key == '2'){
        
        showAlternateImage = showAlternateImage ? false : true; 
}
    if (state ==2)
        if (key == '3'){
        
        showAlternateImage = showAlternateImage ? false : true; 
}
    if (state == 3)
        if (key == '4'){
        
        showAlternateImage = showAlternateImage ? false : true; 
}
   if (state == 4)
       if (key == '5'){
        
        showAlternateImage = showAlternateImage ? false : true; 
}
    if (keyCode == '13'){
       (state = (state + 1) % 5);
       showAlternateImage = true;
    }
}

function deviceShaken(){
   if (state = 2){
    shakes++
    shakey++
    if (shakes <= minimumShakes){
        showAlternateImage == true;
    }
    if (shakes >= minimumShakes){
        showAlternateImage == false;
    }
    if (shakey >= caseShakes){
        (state = state +1) % 5;
        shakey = 0;
        shakes = 0;
    }
}
if (state = 3){

    shakey++
    if (shakey >= caseShakes){
        (state = state +1) % 5;
        shakey = 0;
        shakes = 0;
    }
}
if (state = 4){
    shakey++
    if (shakey >= caseShakes){
        (state = state +1) % 5;
        shakey = 0;
        shakes = 0;
    }
}
}
console.log(state);