"use strict";
var L10_2;
(function (L10_2) {
    class Clouds extends L10_2.Movable {
        /*posX: number;
        posY: number;
        velocityX: number = 0.5; */
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        draw() {
            L10_2.crc2.save();
            L10_2.crc2.translate(this.startPosX, this.startPosY);
            L10_2.crc2.beginPath();
            L10_2.crc2.arc(this.startPosX, this.startPosY, 60, Math.PI * 0.5, Math.PI * 1.5);
            L10_2.crc2.arc(this.startPosX + 70, this.startPosY - 60, 70, Math.PI * 1, Math.PI * 1.85);
            L10_2.crc2.arc(this.startPosX + 152, this.startPosY - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            L10_2.crc2.arc(this.startPosX + 200, this.startPosY, 60, Math.PI * 1.5, Math.PI * 0.5);
            L10_2.crc2.moveTo(this.startPosX + 200, this.startPosY + 60);
            L10_2.crc2.lineTo(this.startPosX, this.startPosY + 60);
            L10_2.crc2.strokeStyle = "HSLA(0, 10%, 90%, 0.4)";
            L10_2.crc2.stroke();
            L10_2.crc2.fillStyle = "HSLA(0, 0%, 100%, 0.4)";
            L10_2.crc2.fill();
            L10_2.crc2.restore();
        }
        update() {
            if (this.startPosX > L10_2.crc2.canvas.width || this.startPosX < 0) {
                this.velocityX = -this.velocityX;
            }
            this.startPosX += this.velocityX;
            //this.draw();
        }
    } //Ende class
    L10_2.Clouds = Clouds;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=cloud.js.map