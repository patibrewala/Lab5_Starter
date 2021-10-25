// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;

function init() {
  // Populating the dropdown menu
  var voiceSelect = document.getElementById('voice-select');
  var textToSpeech = document.querySelector('textarea');
  let button = document.querySelector('button');
  let image = document.querySelector('img');

  var voices = [];

  setTimeout(function() {
    voices = synth.getVoices();
    for(var i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    option.setAttribute('lang', voices[i].lang);
    option.setAttribute('name', voices[i].name);
    voiceSelect.appendChild(option);
    }
  }, 100);

  // Playing the voice
  button.addEventListener('click', function() {
    var speakThis = new SpeechSynthesisUtterance(textToSpeech.value);
    var selected = voiceSelect.selectedOptions[0].getAttribute('name');
    for (var i = 0; i < voices.length; i++) {
      if(voices[i].name === selected) {
        speakThis.voice = voices[i];
      }
    }
    
    synth.speak(speakThis);

    if (synth.speaking == true) {
      image.src = "assets/images/smiling-open.png";
    }

    speakThis.onend = function() {
      image.src = "assets/images/smiling.png";
    }
  });
}
