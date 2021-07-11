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
    } //end handleLoad
    function drawBackground() {
        SoSe21.drawField();
    }
    function drawTeam(_nPlayers) {
        for (let i = 0; i <= _nPlayers; i++) {
            movable.push(new SoSe21.Player());
        }
    }
})(SoSe21 || (SoSe21 = {})); //end namespace
//# sourceMappingURL=AbschlussarbeitSoSe21.js.map