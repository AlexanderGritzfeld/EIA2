"use strict";
var L10_2;
(function (L10_2) {
    class Bees extends L10_2.Movable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
        }
        draw() {
            //wings
            L10_2.crc2.save();
            L10_2.crc2.translate(this.startPosX - 6, this.startPosY - 10);
            L10_2.crc2.fillStyle = "HSLA(178, 100%, 50%, 0.7)";
            L10_2.crc2.strokeStyle = "black";
            L10_2.crc2.beginPath();
            L10_2.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L10_2.crc2.stroke();
            L10_2.crc2.fill();
            L10_2.crc2.restore();
            L10_2.crc2.save();
            L10_2.crc2.beginPath();
            L10_2.crc2.fillStyle = "HSLA(178, 100%, 50%, 0.7)";
            L10_2.crc2.strokeStyle = "black";
            L10_2.crc2.translate(this.startPosX + 6, this.startPosY - 10);
            L10_2.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L10_2.crc2.stroke();
            L10_2.crc2.fill();
            L10_2.crc2.restore();
            //body yellow
            L10_2.crc2.save();
            L10_2.crc2.beginPath();
            L10_2.crc2.translate(this.startPosX, this.startPosY);
            L10_2.crc2.fillStyle = "yellow";
            L10_2.crc2.ellipse(0, 0, 16, 10.5, 3.1, 0, 2 * Math.PI);
            L10_2.crc2.fill();
            L10_2.crc2.strokeStyle = "black";
            L10_2.crc2.stroke();
            L10_2.crc2.restore();
            //body black
            //crc2.save();
            L10_2.crc2.beginPath();
            L10_2.crc2.fillStyle = "black";
            L10_2.crc2.moveTo(this.startPosX - 4, this.startPosY + 10);
            L10_2.crc2.lineTo(this.startPosX + 4, this.startPosY + 10);
            L10_2.crc2.lineTo(this.startPosX + 4, this.startPosY - 10);
            L10_2.crc2.lineTo(this.startPosX - 4, this.startPosY - 10);
            L10_2.crc2.closePath();
            L10_2.crc2.fill();
            L10_2.crc2.restore();
        }
        update() {
            if (this.startPosX > L10_2.crc2.canvas.width || this.startPosX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.startPosY > L10_2.crc2.canvas.height || this.startPosY < L10_2.crc2.canvas.height * 0.25) {
                this.velocityY = -this.velocityY;
            }
            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            }
            this.startPosX += this.velocityX;
            this.startPosY += this.velocityY;
            this.counter++;
            //this.draw();
        }
    } //Ende export class
    L10_2.Bees = Bees;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=bees.js.map