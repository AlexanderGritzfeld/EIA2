"use strict";
var L11_1;
(function (L11_1) {
    function drawSkyAndLawn() {
        let gradient = L11_1.crc2.createLinearGradient(0, 0, 0, L11_1.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L11_1.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        L11_1.crc2.fillStyle = gradient;
        L11_1.crc2.fillRect(0, 0, L11_1.crc2.canvas.width, L11_1.crc2.canvas.height);
    }
    L11_1.drawSkyAndLawn = drawSkyAndLawn;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L11_1.crc2.save();
        L11_1.crc2.translate(_position.x, _position.y);
        L11_1.crc2.beginPath();
        L11_1.crc2.moveTo(0, 0);
        L11_1.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11_1.crc2.lineTo(x, y);
        } while (x < L11_1.crc2.canvas.width);
        L11_1.crc2.lineTo(x, 0);
        L11_1.crc2.closePath();
        let gradient = L11_1.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L11_1.crc2.fillStyle = gradient;
        L11_1.crc2.fill();
        L11_1.crc2.restore();
    }
    L11_1.drawMountains = drawMountains;
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 140;
        let gradient = L11_1.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L11_1.crc2.save();
        L11_1.crc2.translate(_position.x, _position.y);
        L11_1.crc2.fillStyle = gradient;
        L11_1.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_1.crc2.fill();
        L11_1.crc2.restore();
    }
    L11_1.drawSun = drawSun;
})(L11_1 || (L11_1 = {}));
//# sourceMappingURL=background.js.map