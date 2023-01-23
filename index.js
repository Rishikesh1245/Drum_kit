
// Detecting button press

var nodeList = document.querySelectorAll(".drum");
for(let i=0; i< nodeList.length;i++){
    nodeList[i].addEventListener("click",function(){
      
        var buttonInnerHTML = this.innerHTML;  // identifier to the event got clicked eg w,a...
        makeSound(buttonInnerHTML);

        animateButton(buttonInnerHTML);
        
    });
}


// Detecting keyboard press

document.addEventListener("keydown",function(event){
    makeSound(event.key);

    animateButton(event.key);
});



// Function to play sound based on the key got pressed

function makeSound(key){


    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");   // Creating object of Audio Class and giving audio file as Parameter
            tom1.play();                                 // Calling the play method inside the class Audio    **** These are inbuilt JS functions *********
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");   // Creating object of Audio Class and giving audio file as Parameter
            tom2.play();                                 // Calling the play method inside the class Audio    **** These are inbuilt JS functions *********
         break;

         case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");   // Creating object of Audio Class and giving audio file as Parameter
            tom3.play();                                 // Calling the play method inside the class Audio    **** These are inbuilt JS functions *********
         break;

         case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");   // Creating object of Audio Class and giving audio file as Parameter
            tom4.play();                                 // Calling the play method inside the class Audio    **** These are inbuilt JS functions *********
         break;

         case "j":
            var crash = new Audio("sounds/crash.mp3");   // Creating object of Audio Class and giving audio file as Parameter
            crash.play();                                 // Calling the play method inside the class Audio    **** These are inbuilt JS functions *********
         break;

         case "k":
            var kick = new Audio("sounds/kick-bass.mp3");   // Creating object of Audio Class and giving audio file as Parameter
            kick.play();                                 // Calling the play method inside the class Audio    **** These are inbuilt JS functions *********
         break;

         case "l":
            var snare = new Audio("sounds/snare.mp3");   // Creating object of Audio Class and giving audio file as Parameter
            snare.play();                                 // Calling the play method inside the class Audio    **** These are inbuilt JS functions *********
         break;
    
        default :
            console.log(this.innerHTML);
            break;
    }

}

// Function to Animate the key got pressed

function animateButton(currentKey){

    var activeButton = document.querySelector("."+currentKey) ;        // .w, .a , .s,  .k, .l ...
    activeButton.classList.add("pressed");                       // adding the button to style it when it got clicked.

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
