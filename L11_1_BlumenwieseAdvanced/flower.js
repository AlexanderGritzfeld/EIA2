"use strict";
var L11_1;
(function (L11_1) {
    class Flowers {
        //saturation: number = 0;
        constructor(_position) {
            this.petalColor = ["red", "white", "orange", "HSL(329, 100%, 24%)", "purple"];
            this.randomNumberArray = Math.floor(Math.random() * Math.floor(5));
            this.randomSaturation = Math.floor(Math.random() * 100);
            this.nectar = this.randomSaturation;
            this.positionX = _position.x;
            this.positionY = _position.y;
            this.draw();
        }
        draw() {
            //for (let flowers: number = 0; flowers < 11; flowers++) {
            //console.log("Saturation: " + this.randomSaturation);
            //Stängel
            L11_1.crc2.save();
            L11_1.crc2.beginPath();
            L11_1.crc2.moveTo(this.positionX, this.positionY);
            L11_1.crc2.lineTo(this.positionX + 10, this.positionY);
            L11_1.crc2.lineTo(this.positionX + 10, this.positionY - 75);
            L11_1.crc2.lineTo(this.positionX, this.positionY - 75);
            L11_1.crc2.fillStyle = "hsl(100," + this.randomSaturation + "%, 30%)";
            L11_1.crc2.closePath();
            L11_1.crc2.fill();
            L11_1.crc2.restore();
            //Blütenblätter
            L11_1.crc2.save();
            L11_1.crc2.beginPath();
            L11_1.crc2.translate(this.positionX + 15, this.positionY - 75);
            L11_1.crc2.fillStyle = this.petalColor[this.randomNumberArray];
            L11_1.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            L11_1.crc2.fill();
            L11_1.crc2.restore();
            L11_1.crc2.save();
            L11_1.crc2.beginPath();
            L11_1.crc2.translate(this.positionX - 5, this.positionY - 75);
            L11_1.crc2.fillStyle = this.petalColor[this.randomNumberArray];
            L11_1.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            L11_1.crc2.fill();
            L11_1.crc2.restore();
            L11_1.crc2.save();
            L11_1.crc2.beginPath();
            L11_1.crc2.translate(this.positionX + 5, this.positionY - 67);
            L11_1.crc2.fillStyle = this.petalColor[this.randomNumberArray];
            L11_1.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            L11_1.crc2.fill();
            L11_1.crc2.restore();
            L11_1.crc2.save();
            L11_1.crc2.beginPath();
            L11_1.crc2.translate(this.positionX + 5, this.positionY - 83);
            L11_1.crc2.fillStyle = this.petalColor[this.randomNumberArray];
            L11_1.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            L11_1.crc2.fill();
            L11_1.crc2.restore();
            //Blüte innen
            L11_1.crc2.save();
            L11_1.crc2.beginPath();
            L11_1.crc2.translate(this.positionX + 5, this.positionY - 75);
            L11_1.crc2.fillStyle = "hsl(58," + this.randomSaturation + "%, 50%)";
            L11_1.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            L11_1.crc2.fill();
            L11_1.crc2.restore();
            //this.positionX = this.positionX + 100;
            //console.log("X: " + this.positionX);
            // }//Ende for Schleife
            this.nectar = this.randomSaturation;
            //console.log("Nektar: " + this.nectar);
            //this.randomSaturation = this.randomSaturation + 1;
            //console.log("New: " + this.randomSaturation);
        }
    } //Ende class Flowers
    L11_1.Flowers = Flowers;
})(L11_1 || (L11_1 = {}));
//# sourceMappingURL=flower.js.map