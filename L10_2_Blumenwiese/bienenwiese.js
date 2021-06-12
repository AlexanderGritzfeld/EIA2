"use strict";
var L10_2;
(function (L10_2) {
    //inspiriert und teilweise entnommen von Jirka seinem Code "Allay.ts"
    console.log("Test");
    L10_2.golden = 0.62;
    let clouds = [];
    let flowers = [];
    let bees = [];
    let imageData;
    L10_2.greenColors = ["darkGreen", "forestGreen", "green", "oliveDrab", "seaGreen"];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas = document.querySelector("canvas");
        //document.querySelector("canvas");   
        L10_2.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBackground();
        drawCloud();
        drawTree();
        drawFlower();
        drawBee(10);
        imageData = L10_2.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function drawBackground() {
        let horizon = L10_2.crc2.canvas.height * L10_2.golden;
        let posMountains = { x: 0, y: horizon };
        L10_2.drawSkyAndLawn();
        L10_2.drawMountains(posMountains, 75, 200, "grey", "white");
        L10_2.drawSun({ x: L10_2.crc2.canvas.width - 100, y: 75 });
    }
    function drawCloud() {
        clouds.push(new L10_2.Clouds({ x: L10_2.crc2.canvas.width * .10, y: L10_2.crc2.canvas.height * .10 }));
    }
    function drawTree() {
        L10_2.drawTreeLog({ x: 50, y: L10_2.crc2.canvas.height });
        L10_2.drawLeaves({ x: 175, y: 100 }, { x: 350, y: 100 });
    }
    function drawFlower() {
        flowers.push(new L10_2.Flowers({ x: L10_2.crc2.canvas.width / 4, y: L10_2.crc2.canvas.height - 50 }));
    }
    function drawBee(_nBees) {
        for (let i = 0; i < _nBees; i++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            bees.push(new L10_2.Bees({ x: L10_2.crc2.canvas.width / 4, y: L10_2.crc2.canvas.height * L10_2.golden / 2.4 }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        L10_2.crc2.clearRect(0, 0, L10_2.crc2.canvas.width, L10_2.crc2.canvas.height);
        L10_2.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < bees.length; index++) {
            bees[index].update();
        }
        for (let index = 0; index < clouds.length; index++) {
            clouds[index].update();
        }
    }
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=bienenwiese.js.map