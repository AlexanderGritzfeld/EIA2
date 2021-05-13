"use strict";
var L08_2_Bees;
(function (L08_2_Bees) {
    //inspieriert und teilweise entnommen von Jirka seinem Code
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawSun({ x: crc2.canvas.width - 100, y: 75 });
        drawTreeLog({ x: 50, y: canvas.height });
    }
    function drawBackground() {
        console.log("Hintergrund");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 140;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawTreeLog(_position) {
        crc2.beginPath();
        crc2.fillStyle = "HSL(32, 100%, 8%)";
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x + 100, _position.y);
        crc2.lineTo(_position.x + 100, 100);
        crc2.lineTo(_position.x, 100);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "HSL(32, 100%, 8%)";
        crc2.moveTo(_position.x + 100, 200);
        crc2.lineTo(_position.x + 300, 100);
        crc2.lineTo(_position.x + 250, 100);
        crc2.lineTo(_position.x + 100, 150);
        crc2.closePath();
        crc2.fill();
    }
})(L08_2_Bees || (L08_2_Bees = {}));
//# sourceMappingURL=bees.js.map