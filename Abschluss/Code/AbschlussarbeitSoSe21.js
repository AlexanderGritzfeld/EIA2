"use strict";
var SoSe21;
(function (SoSe21) {
    window.addEventListener("load", handleLoad);
    console.log("Test");
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas = document.querySelector("canvas");
        SoSe21.crc2 = canvas.getContext("2d");
        drawBackground();
        /*canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; */
    } //end handleLoad
    function drawBackground() {
        SoSe21.drawField();
    }
})(SoSe21 || (SoSe21 = {})); //end namespace
//# sourceMappingURL=AbschlussarbeitSoSe21.js.map