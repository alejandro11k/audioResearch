class Audioworklet1 extends AudioWorkletProcessor {
    constructor() {
        super();
    }

    process(inputs, outputs){
        /* process audio */
        let input = inputs[0];
        let output = outputs[0];
        for (let channel = 0; channel < input.length; ++channel){
            output[channel].set(input[channel]);
        }
        return true;
    }
}

registerProcessor('audioworklet1', Audioworklet1);
