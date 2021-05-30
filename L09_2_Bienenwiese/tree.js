"use strict";
var L09_2;
(function (L09_2) {
    function drawTreeLog(_position) {
        //Hauptstamm
        L09_2.crc2.beginPath();
        L09_2.crc2.fillStyle = "HSL(32, 100%, 8%)";
        L09_2.crc2.moveTo(_position.x, _position.y);
        L09_2.crc2.lineTo(_position.x + 100, _position.y);
        L09_2.crc2.lineTo(_position.x + 100, 20);
        L09_2.crc2.lineTo(_position.x, 20);
        L09_2.crc2.closePath();
        L09_2.crc2.stroke();
        L09_2.crc2.fill();
        //Ast
        L09_2.crc2.beginPath();
        L09_2.crc2.fillStyle = "HSL(32, 100%, 8%)";
        L09_2.crc2.moveTo(_position.x + 100, 200);
        L09_2.crc2.lineTo(_position.x + 300, 100);
        L09_2.crc2.lineTo(_position.x + 250, 100);
        L09_2.crc2.lineTo(_position.x + 100, 150);
        L09_2.crc2.closePath();
        L09_2.crc2.fill();
        //Bienenstock gelb
        L09_2.crc2.save();
        L09_2.crc2.beginPath();
        L09_2.crc2.translate(_position.x + 180, 190);
        L09_2.crc2.fillStyle = "HSL(51, 100%, 50%)";
        L09_2.crc2.ellipse(0, 0, 60, 45, 1.5, 0, 2 * Math.PI);
        L09_2.crc2.fill();
        L09_2.crc2.restore();
        //Schwarz
        L09_2.crc2.save();
        L09_2.crc2.beginPath();
        L09_2.crc2.translate(_position.x + 180, 220);
        L09_2.crc2.fillStyle = "black";
        L09_2.crc2.ellipse(0, 0, 16, 10.5, 1.5, 0, 2 * Math.PI);
        L09_2.crc2.fill();
        L09_2.crc2.restore();
    }
    L09_2.drawTreeLog = drawTreeLog;
    function drawLeaves(_position, _size) {
        let nParticles = 35;
        let radiusParticle = 50;
        let particle = new Path2D();
        let randomNumberArray = Math.floor(Math.random() * Math.floor(5));
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        L09_2.crc2.save();
        L09_2.crc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09_2.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L09_2.crc2.translate(x, y);
            L09_2.crc2.fillStyle = L09_2.greenColors[randomNumberArray];
            L09_2.crc2.fill(particle);
            L09_2.crc2.restore();
        }
        L09_2.crc2.restore();
    }
    L09_2.drawLeaves = drawLeaves;
})(L09_2 || (L09_2 = {}));
//# sourceMappingURL=tree.js.map