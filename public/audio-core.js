import { PortWorkletNode } from './port-worklet-node.js'

export function init() {
    const context = new AudioContext();
        context.audioWorklet.addModule('./processor.js').then(() => {
        let portWorkletNode = new PortWorkletNode(context);
        //let oscillator = new OscillatorNode(context)
        //let gainNode = new GainNode(context)
        //oscillator.connect(gainNode)
        //gainNode.connect(portWorkletNode)
        portWorkletNode.connect(context.destination);     

    });
}

function trigger() {
    const time = context.currentTime;
    oscillator.frequency.setValueAtTime(150, time);
    gainNode.gain.setValueAtTime(0.8, time);

    oscillator.frequency.exponentialRampToValueAtTime(0.1, time + 0.5);
    gainNode.gain.exponentialRampToValueAtTime(0.1, time + 0.5);
}


