"use strict";
var SoSe21;
(function (SoSe21) {
    window.addEventListener("load", handleLoad);
    let movable = [];
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas = document.querySelector("canvas");
        SoSe21.crc2 = canvas.getContext("2d");
        drawBackground();
        drawTeam(11);
        animate();
    } //end handleLoad
    function drawBackground() {
        SoSe21.drawField();
    }
    function drawTeam(_nPlayers) {
        for (let i = 0; i <= _nPlayers; i++) {
            movable.push(new SoSe21.Player({ x: SoSe21.crc2.canvas.width / (i + 1), y: SoSe21.crc2.canvas.height / (i + 1) }, { x: 0.5, y: 0.5 }));
            console.log("Spieler Nummer: " + (i + 1));
        } //end for 
    } //end drawTeam
    function animate() {
        for (let index = 0; index < movable.length; index++) {
            movable[index].update();
            movable[index].draw();
        }
    }
})(SoSe21 || (SoSe21 = {})); //end namespace
//# sourceMappingURL=AbschlussarbeitSoSe21.js.map