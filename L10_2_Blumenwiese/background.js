"use strict";
var L10_2;
(function (L10_2) {
    function drawSkyAndLawn() {
        let gradient = L10_2.crc2.createLinearGradient(0, 0, 0, L10_2.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L10_2.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        L10_2.crc2.fillStyle = gradient;
        L10_2.crc2.fillRect(0, 0, L10_2.crc2.canvas.width, L10_2.crc2.canvas.height);
    }
    L10_2.drawSkyAndLawn = drawSkyAndLawn;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L10_2.crc2.save();
        L10_2.crc2.translate(_position.x, _position.y);
        L10_2.crc2.beginPath();
        L10_2.crc2.moveTo(0, 0);
        L10_2.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10_2.crc2.lineTo(x, y);
        } while (x < L10_2.crc2.canvas.width);
        L10_2.crc2.lineTo(x, 0);
        L10_2.crc2.closePath();
        let gradient = L10_2.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L10_2.crc2.fillStyle = gradient;
        L10_2.crc2.fill();
        L10_2.crc2.restore();
    }
    L10_2.drawMountains = drawMountains;
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 140;
        let gradient = L10_2.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L10_2.crc2.save();
        L10_2.crc2.translate(_position.x, _position.y);
        L10_2.crc2.fillStyle = gradient;
        L10_2.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_2.crc2.fill();
        L10_2.crc2.restore();
    }
    L10_2.drawSun = drawSun;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=background.js.map