"use strict";
var L11_1;
(function (L11_1) {
    //inspiriert und teilweise entnommen von Jirka seinem Code "Allay.ts"
    window.addEventListener("load", handleLoad);
    L11_1.golden = 0.62;
    //let clouds: Clouds[] = [];
    //let bees: Bees[] = [];
    let movable = [];
    let flowers = [];
    let imageData;
    L11_1.greenColors = ["darkGreen", "forestGreen", "green", "oliveDrab", "seaGreen"];
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas = document.querySelector("canvas");
        L11_1.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBackground();
        drawTree();
        drawCloud();
        drawFlower();
        drawBee(10);
        imageData = L11_1.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function drawBackground() {
        let horizon = L11_1.crc2.canvas.height * L11_1.golden;
        let posMountains = { x: 0, y: horizon };
        L11_1.drawSkyAndLawn();
        L11_1.drawMountains(posMountains, 75, 200, "grey", "white");
        L11_1.drawSun({ x: L11_1.crc2.canvas.width - 100, y: 75 });
        console.log("Test_BG");
    }
    function drawCloud() {
        movable.push(new L11_1.Clouds({ x: L11_1.crc2.canvas.width * .10, y: L11_1.crc2.canvas.height * .10 }, { x: 0.5, y: 0.0 }));
        console.log("Test_Cloud");
    }
    function drawTree() {
        L11_1.drawTreeLog({ x: 50, y: L11_1.crc2.canvas.height });
        L11_1.drawLeaves({ x: 175, y: 100 }, { x: 350, y: 100 });
    }
    function drawFlower() {
        flowers.push(new L11_1.Flowers({ x: L11_1.crc2.canvas.width / 4, y: L11_1.crc2.canvas.height - 50 }));
    }
    function drawBee(_nBees) {
        for (let i = 0; i < _nBees; i++) {
            //let randomScale: number = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            movable.push(new L11_1.Bees({ x: L11_1.crc2.canvas.width / 4, y: L11_1.crc2.canvas.height * L11_1.golden / 2.4 }, { x: randomVelocityX, y: randomVelocityY })); //, randomScale
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        L11_1.crc2.clearRect(0, 0, L11_1.crc2.canvas.width, L11_1.crc2.canvas.height);
        L11_1.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < movable.length; index++) {
            movable[index].update();
            movable[index].draw();
        } // Ende for
    } //Ende animate
})(L11_1 || (L11_1 = {}));
//# sourceMappingURL=bienenwiese.js.map