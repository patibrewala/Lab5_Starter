// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  // TODO
  let horn = document.getElementById("horn-select");
  let image = document.querySelector('img');
  let audio = document.querySelector('audio');
  let button = document.querySelector("button");
  
  // Change the image and audio
  horn.addEventListener('input',  function() {
    //changeImgAudio(document.querySelector('select'));
    if(horn.value == 'car-horn'){
      image.src = "assets/images/car-horn.svg";
      audio.src = 'assets/audio/car-horn.mp3';
    }
    else if(horn.value == 'air-horn'){
      image.src = "assets/images/air-horn.svg";
      audio.src = 'assets/audio/air-horn.mp3';
    }
    else if(horn.value == 'party-horn'){
      image.src = "assets/images/party-horn.svg";
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  // Play audio
  button.addEventListener('click', function(){
    if(horn.value != 'select' && volSlider.value > 0){
      audio.play();
      
      //confetti if party horn
      if (horn.value == 'party-horn'){
        jsConfetti.addConfetti();
      }
    }  
  });

  let volSlider = document.querySelector("input");
  let volImg = document.querySelector('div img');

  //Change volume
  volSlider.addEventListener('input', function(){
    if(volSlider.value == 0){
      volImg.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volSlider.value >= 1 && volSlider.value < 33){
      volImg.src = 'assets/icons/volume-level-1.svg';
    }
    else if (volSlider.value >= 33 && volSlider.value < 67){
      volImg.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      volImg.src = 'assets/icons/volume-level-3.svg';
    } 

    audio.volume = volSlider.value / 100;
  });
}
