"use strict";
class ControleDeAudio {
    constructor() {
        this.volume = 2;
    }
    aumentarVolume() {
        if (this.volume < 10) {
            this.volume++;
        }
        else {
            console.log("Volume máximo atingido");
        }
    }
    diminuirVolume() {
        if (this.volume > 0) {
            this.volume--;
        }
        else {
            console.log("Volume mínimo atingido");
        }
    }
    lerVolume() {
        console.log(`Volume atual: ${this.volume}`);
    }
}
function main() {
    let controle = new ControleDeAudio();
    controle.lerVolume();
    controle.aumentarVolume();
    controle.lerVolume();
    controle.diminuirVolume();
    controle.lerVolume();
}
main();
