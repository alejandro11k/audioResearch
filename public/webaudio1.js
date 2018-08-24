// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API#Basic_concepts

var audioCtx = new AudioContext();
//var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

let on = false;

function onOff(){
    if (on) {
        gainNode.disconnect(audioCtx.destination);
        on = false
    } else {
        gainNode.connect(audioCtx.destination);
        on = true
    }
}

function init() {
    oscillator.type = 'sine';
    oscillator.frequency.value = 500;
    oscillator.start();
    
    gainNode.gain.value = 0.25;
    on = true;
    document.getElementById("init").hidden = true;
}


