import { PortWorkletNode } from './port-worklet-node.js'

let context = new AudioContext();

export function init() {
//    const context = new AudioContext();
        context.audioWorklet.addModule('./processor.js').then(() => {
        let portWorkletNode = new PortWorkletNode(context);
        //let oscillator = new OscillatorNode(context)
        //let gainNode = new GainNode(context)
        //oscillator.connect(gainNode)
        //gainNode.connect(portWorkletNode)
        portWorkletNode.connect(context.destination);     
    });
}
export function stop() {
    context.close()
    context = new AudioContext();
}