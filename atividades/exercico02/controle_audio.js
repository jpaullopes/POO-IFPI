var ControleDeAudio = /** @class */ (function () {
    function ControleDeAudio() {
        this.volume = 2;
    }
    ControleDeAudio.prototype.aumentarVolume = function () {
        if (this.volume < 10) {
            this.volume++;
        }
        else {
            console.log("Volume máximo atingido");
        }
    };
    ControleDeAudio.prototype.diminuirVolume = function () {
        if (this.volume > 0) {
            this.volume--;
        }
        else {
            console.log("Volume mínimo atingido");
        }
    };
    ControleDeAudio.prototype.lerVolume = function () {
        console.log("Volume atual: ".concat(this.volume));
    };
    return ControleDeAudio;
}());
function main() {
    var controle = new ControleDeAudio();
    controle.lerVolume();
    controle.aumentarVolume();
    controle.lerVolume();
    controle.diminuirVolume();
    controle.lerVolume();
}
main();
