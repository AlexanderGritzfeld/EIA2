"use strict";
var L08_2_Bees;
(function (L08_2_Bees) {
    //inspiriert und teilweise entnommen von Jirka seinem Code "Allay.ts"
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    let greenColors = ["darkGreen", "forestGreen", "green", "oliveDrab", "seaGreen"];
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
        drawLeaves({ x: 175, y: 100 }, { x: 350, y: 100 });
        drawFlower({ x: 400, y: canvas.height - 50 }, 3);
    }
    function drawBackground() {
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
        //Hauptstamm
        crc2.beginPath();
        crc2.fillStyle = "HSL(32, 100%, 8%)";
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x + 100, _position.y);
        crc2.lineTo(_position.x + 100, 20);
        crc2.lineTo(_position.x, 20);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //Ast
        crc2.beginPath();
        crc2.fillStyle = "HSL(32, 100%, 8%)";
        crc2.moveTo(_position.x + 100, 200);
        crc2.lineTo(_position.x + 300, 100);
        crc2.lineTo(_position.x + 250, 100);
        crc2.lineTo(_position.x + 100, 150);
        crc2.closePath();
        crc2.fill();
    }
    function drawLeaves(_position, _size) {
        let nParticles = 35;
        let radiusParticle = 50;
        let particle = new Path2D();
        let randomNumberArray = Math.floor(Math.random() * Math.floor(5));
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "green";
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fillStyle = greenColors[randomNumberArray];
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawFlower(_position, _maxFlowers) {
        let positionX = _position.x;
        let petalColor = ["red", "white", "orange", "HSL(329, 100%, 24%)", "purple"];
        let randomNumberArray = Math.floor(Math.random() * Math.floor(5));
        for (let flowers = 0; flowers < _maxFlowers; flowers++) {
            //Stängel
            crc2.beginPath();
            crc2.fillStyle = "HSL(131, 100%, 24%)";
            crc2.moveTo(positionX, _position.y);
            crc2.lineTo(positionX + 10, _position.y);
            crc2.lineTo(positionX + 10, _position.y - 75);
            crc2.lineTo(positionX, _position.y - 75);
            crc2.closePath();
            crc2.fill();
            console.log(positionX);
            //Blütenblätter
            crc2.save();
            crc2.beginPath();
            crc2.translate(positionX + 15, _position.y - 75);
            crc2.fillStyle = petalColor[randomNumberArray];
            crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
            crc2.save();
            crc2.beginPath();
            crc2.translate(positionX - 5, _position.y - 75);
            crc2.fillStyle = petalColor[randomNumberArray];
            crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
            crc2.save();
            crc2.beginPath();
            crc2.translate(positionX + 5, _position.y - 67);
            crc2.fillStyle = petalColor[randomNumberArray];
            crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
            crc2.save();
            crc2.beginPath();
            crc2.translate(positionX + 5, _position.y - 83);
            crc2.fillStyle = petalColor[randomNumberArray];
            crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
            //Blüte innen
            crc2.save();
            crc2.beginPath();
            crc2.translate(positionX + 5, _position.y - 75);
            crc2.fillStyle = "yellow";
            crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
            positionX = positionX + 100;
            console.log(flowers);
        } //Ende for Schleife
    }
})(L08_2_Bees || (L08_2_Bees = {}));
//# sourceMappingURL=bees.js.map