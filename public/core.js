import { PortWorkletNode } from './port-worklet-node.js'

export function start() {
    const context = new AudioContext();
        context.audioWorklet.addModule('./processor.js').then(() => {
        let portWorkletNode = new PortWorkletNode(context);
        portWorkletNode.connect(context.destination);
    });
}
