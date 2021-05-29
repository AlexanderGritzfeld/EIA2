"use strict";
var L09_2;
(function (L09_2) {
    class Flowers {
        constructor(_position) {
            this.petalColor = ["red", "white", "orange", "HSL(329, 100%, 24%)", "purple"];
            this.randomNumberArray = Math.floor(Math.random() * Math.floor(5));
            this.positionX = _position.x;
            this.positionY = _position.y;
            this.draw();
        }
        draw() {
            for (let flowers = 0; flowers < 11; flowers++) {
                //Stängel
                L09_2.crc2.save();
                L09_2.crc2.beginPath();
                L09_2.crc2.fillStyle = "HSL(131, 100%, 24%)";
                L09_2.crc2.moveTo(this.positionX, this.positionY);
                L09_2.crc2.lineTo(this.positionX + 10, this.positionY);
                L09_2.crc2.lineTo(this.positionX + 10, this.positionY - 75);
                L09_2.crc2.lineTo(this.positionX, this.positionY - 75);
                L09_2.crc2.closePath();
                L09_2.crc2.fill();
                L09_2.crc2.restore();
                //Blütenblätter
                L09_2.crc2.save();
                L09_2.crc2.beginPath();
                L09_2.crc2.translate(this.positionX + 15, this.positionY - 75);
                L09_2.crc2.fillStyle = this.petalColor[this.randomNumberArray];
                L09_2.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                L09_2.crc2.fill();
                L09_2.crc2.restore();
                L09_2.crc2.save();
                L09_2.crc2.beginPath();
                L09_2.crc2.translate(this.positionX - 5, this.positionY - 75);
                L09_2.crc2.fillStyle = this.petalColor[this.randomNumberArray];
                L09_2.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                L09_2.crc2.fill();
                L09_2.crc2.restore();
                L09_2.crc2.save();
                L09_2.crc2.beginPath();
                L09_2.crc2.translate(this.positionX + 5, this.positionY - 67);
                L09_2.crc2.fillStyle = this.petalColor[this.randomNumberArray];
                L09_2.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                L09_2.crc2.fill();
                L09_2.crc2.restore();
                L09_2.crc2.save();
                L09_2.crc2.beginPath();
                L09_2.crc2.translate(this.positionX + 5, this.positionY - 83);
                L09_2.crc2.fillStyle = this.petalColor[this.randomNumberArray];
                L09_2.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                L09_2.crc2.fill();
                L09_2.crc2.restore();
                //Blüte innen
                L09_2.crc2.save();
                L09_2.crc2.beginPath();
                L09_2.crc2.translate(this.positionX + 5, this.positionY - 75);
                L09_2.crc2.fillStyle = "yellow";
                L09_2.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                L09_2.crc2.fill();
                L09_2.crc2.restore();
                this.positionX = this.positionX + 100;
            } //Ende for Schleife
        }
    } //Ende class Flowers
    L09_2.Flowers = Flowers;
})(L09_2 || (L09_2 = {}));
//# sourceMappingURL=flowers.js.map