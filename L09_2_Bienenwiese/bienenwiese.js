"use strict";
var L09_2;
(function (L09_2) {
    //inspiriert und teilweise entnommen von Jirka seinem Code "Allay.ts"
    //erstellt mit der Hilfe von Huu Thien seinem Code
    L09_2.golden = 0.62;
    let clouds = [];
    let flowers = [];
    let bees = [];
    let imageData;
    L09_2.greenColors = ["darkGreen", "forestGreen", "green", "oliveDrab", "seaGreen"];
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
        drawBackground();
        drawCloud();
        drawTree();
        drawFlower();
        drawBee(10);
        imageData = L09_2.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function drawBackground() {
        let horizon = L09_2.crc2.canvas.height * L09_2.golden;
        let posMountains = { x: 0, y: horizon };
        L09_2.drawSkyAndLawn();
        L09_2.drawMountains(posMountains, 75, 200, "grey", "white");
        L09_2.drawSun({ x: L09_2.crc2.canvas.width - 100, y: 75 });
    }
    function drawCloud() {
        clouds.push(new L09_2.Clouds({ x: L09_2.crc2.canvas.width * .10, y: L09_2.crc2.canvas.height * .10 }));
    }
    function drawTree() {
        L09_2.drawTreeLog({ x: 50, y: L09_2.crc2.canvas.height });
        L09_2.drawLeaves({ x: 175, y: 100 }, { x: 350, y: 100 });
    }
    function drawFlower() {
        flowers.push(new L09_2.Flowers({ x: L09_2.crc2.canvas.width / 4, y: L09_2.crc2.canvas.height - 50 }));
    }
    function drawBee(_nBees) {
        for (let i = 0; i < _nBees; i++) {
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
        for (let index = 0; index < clouds.length; index++) {
            clouds[index].update();
        }
    }
})(L09_2 || (L09_2 = {}));
//# sourceMappingURL=bienenwiese.js.map