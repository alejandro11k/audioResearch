import { PortWorkletNode } from './port-worklet-node.js'

let context = new AudioContext();
let periodicity = 1

export function init() {
//    const context = new AudioContext();
        context.audioWorklet.addModule('./processor.js').then(() => {
        let portWorkletNode = new PortWorkletNode(context);
        //let oscillator = new OscillatorNode(context)
        //let gainNode = new GainNode(context)
        //oscillator.connect(gainNode)
        //gainNode.connect(portWorkletNode)
        portWorkletNode.connect(context.destination);

        let param = portWorkletNode.parameters.get('periodicity')
        param.value = periodicity
    });
}
export function stop() {
    context.close()
    context = new AudioContext();
}

export function setPeriodicity(value) {
    periodicity = value
    console.log(value)
}