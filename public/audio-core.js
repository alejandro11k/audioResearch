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
