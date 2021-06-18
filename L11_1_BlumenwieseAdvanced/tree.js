"use strict";
var L11_1;
(function (L11_1) {
    function drawTreeLog(_position) {
        //Hauptstamm
        L11_1.crc2.beginPath();
        L11_1.crc2.fillStyle = "HSL(32, 100%, 8%)";
        L11_1.crc2.moveTo(_position.x, _position.y);
        L11_1.crc2.lineTo(_position.x + 100, _position.y);
        L11_1.crc2.lineTo(_position.x + 100, 20);
        L11_1.crc2.lineTo(_position.x, 20);
        L11_1.crc2.closePath();
        L11_1.crc2.stroke();
        L11_1.crc2.fill();
        //Ast
        L11_1.crc2.beginPath();
        L11_1.crc2.fillStyle = "HSL(32, 100%, 8%)";
        L11_1.crc2.moveTo(_position.x + 100, 200);
        L11_1.crc2.lineTo(_position.x + 300, 100);
        L11_1.crc2.lineTo(_position.x + 250, 100);
        L11_1.crc2.lineTo(_position.x + 100, 150);
        L11_1.crc2.closePath();
        L11_1.crc2.fill();
        //Bienenstock gelb
        L11_1.crc2.save();
        L11_1.crc2.beginPath();
        L11_1.crc2.translate(_position.x + 180, 190);
        L11_1.crc2.fillStyle = "HSL(51, 100%, 50%)";
        L11_1.crc2.ellipse(0, 0, 60, 45, 1.5, 0, 2 * Math.PI);
        L11_1.crc2.fill();
        L11_1.crc2.restore();
        //Schwarz
        L11_1.crc2.save();
        L11_1.crc2.beginPath();
        L11_1.crc2.translate(_position.x + 180, 220);
        L11_1.crc2.fillStyle = "black";
        L11_1.crc2.ellipse(0, 0, 16, 10.5, 1.5, 0, 2 * Math.PI);
        L11_1.crc2.fill();
        L11_1.crc2.restore();
    }
    L11_1.drawTreeLog = drawTreeLog;
    function drawLeaves(_position, _size) {
        let nParticles = 35;
        let radiusParticle = 50;
        let particle = new Path2D();
        let randomNumberArray = Math.floor(Math.random() * Math.floor(5));
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        L11_1.crc2.save();
        L11_1.crc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L11_1.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L11_1.crc2.translate(x, y);
            L11_1.crc2.fillStyle = L11_1.greenColors[randomNumberArray];
            L11_1.crc2.fill(particle);
            L11_1.crc2.restore();
        }
        L11_1.crc2.restore();
    }
    L11_1.drawLeaves = drawLeaves;
})(L11_1 || (L11_1 = {}));
//# sourceMappingURL=tree.js.map