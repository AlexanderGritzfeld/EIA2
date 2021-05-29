"use strict";
var L09_2;
(function (L09_2) {
    //inspiriert und teilweise entnommen von Jirka seinem Code "Allay.ts"
    //erstellt mit der Hilfe von Huu Thien seinem Code
    L09_2.golden = 0.62;
    let bees = [];
    let flowers = [];
    let imageData;
    let greenColors = ["darkGreen", "forestGreen", "green", "oliveDrab", "seaGreen"];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas = document.querySelector("canvas");
        document.querySelector("canvas");
        L09_2.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let horizon = L09_2.crc2.canvas.height * L09_2.golden;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawSun({ x: L09_2.crc2.canvas.width - 100, y: 75 });
        drawTreeLog({ x: 50, y: canvas.height });
        drawLeaves({ x: 175, y: 100 }, { x: 350, y: 100 });
        drawFlower();
        drawBee(10);
        imageData = L09_2.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function drawBackground() {
        let gradient = L09_2.crc2.createLinearGradient(0, 0, 0, L09_2.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L09_2.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        L09_2.crc2.fillStyle = gradient;
        L09_2.crc2.fillRect(0, 0, L09_2.crc2.canvas.width, L09_2.crc2.canvas.height);
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L09_2.crc2.save();
        L09_2.crc2.translate(_position.x, _position.y);
        L09_2.crc2.beginPath();
        L09_2.crc2.moveTo(0, 0);
        L09_2.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_2.crc2.lineTo(x, y);
        } while (x < L09_2.crc2.canvas.width);
        L09_2.crc2.lineTo(x, 0);
        L09_2.crc2.closePath();
        let gradient = L09_2.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09_2.crc2.fillStyle = gradient;
        L09_2.crc2.fill();
        L09_2.crc2.restore();
    }
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 140;
        let gradient = L09_2.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L09_2.crc2.save();
        L09_2.crc2.translate(_position.x, _position.y);
        L09_2.crc2.fillStyle = gradient;
        L09_2.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_2.crc2.fill();
        L09_2.crc2.restore();
    }
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
            L09_2.crc2.fillStyle = greenColors[randomNumberArray];
            L09_2.crc2.fill(particle);
            L09_2.crc2.restore();
        }
        L09_2.crc2.restore();
    }
    function drawFlower() {
        flowers.push(new L09_2.Flowers({ x: L09_2.crc2.canvas.width / 4, y: L09_2.crc2.canvas.height - 50 }));
    }
    function drawBee(_nBees) {
        for (let i = 0; i < _nBees; i++) {
            //console.log("Test");
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            bees.push(new L09_2.Bees({ x: L09_2.crc2.canvas.width / 4, y: L09_2.crc2.canvas.height * L09_2.golden / 2.4 }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        L09_2.crc2.clearRect(0, 0, L09_2.crc2.canvas.width, L09_2.crc2.canvas.height);
        L09_2.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < bees.length; index++) {
            bees[index].update();
        }
        /*for (let index: number = 0; index < clouds.length; index ++) {
            clouds[index].update();
        }*/
    }
})(L09_2 || (L09_2 = {}));
//# sourceMappingURL=bienenwiese.js.map