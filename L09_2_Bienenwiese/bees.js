"use strict";
var L09_2;
(function (L09_2) {
    class Bees {
        constructor(_position, _velocity, _randomScale) {
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
            this.startPosX = _position.x;
            this.startPosY = _position.y;
            this.randomScale = _randomScale;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            console.log("Test");
            //wings
            L09_2.crc2.save();
            L09_2.crc2.translate(this.startPosX - 6, this.startPosY - 10);
            L09_2.crc2.fillStyle = "HSLA(178, 100%, 50%, 0.7)";
            L09_2.crc2.strokeStyle = "black";
            L09_2.crc2.beginPath();
            L09_2.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L09_2.crc2.stroke();
            L09_2.crc2.fill();
            L09_2.crc2.restore();
            L09_2.crc2.save();
            L09_2.crc2.beginPath();
            L09_2.crc2.fillStyle = "HSLA(178, 100%, 50%, 0.7)";
            L09_2.crc2.strokeStyle = "black";
            L09_2.crc2.translate(this.startPosX + 6, this.startPosY - 10);
            L09_2.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L09_2.crc2.stroke();
            L09_2.crc2.fill();
            L09_2.crc2.restore();
            //body yellow
            L09_2.crc2.save();
            L09_2.crc2.beginPath();
            L09_2.crc2.translate(this.startPosX, this.startPosY);
            L09_2.crc2.fillStyle = "yellow";
            L09_2.crc2.ellipse(0, 0, 16, 10.5, 3.1, 0, 2 * Math.PI);
            L09_2.crc2.fill();
            L09_2.crc2.strokeStyle = "black";
            L09_2.crc2.stroke();
            L09_2.crc2.restore();
            //body black
            //crc2.save();
            L09_2.crc2.beginPath();
            L09_2.crc2.fillStyle = "black";
            L09_2.crc2.moveTo(this.startPosX - 4, this.startPosY + 10);
            L09_2.crc2.lineTo(this.startPosX + 4, this.startPosY + 10);
            L09_2.crc2.lineTo(this.startPosX + 4, this.startPosY - 10);
            L09_2.crc2.lineTo(this.startPosX - 4, this.startPosY - 10);
            L09_2.crc2.closePath();
            L09_2.crc2.fill();
            L09_2.crc2.restore();
        }
        update() {
            if (this.startPosX > L09_2.crc2.canvas.width || this.startPosX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.startPosY > L09_2.crc2.canvas.height || this.startPosY < L09_2.crc2.canvas.height * 0.25) {
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
            this.draw();
        }
    } //Ende export class
    L09_2.Bees = Bees;
})(L09_2 || (L09_2 = {}));
//# sourceMappingURL=bees.js.map