"use strict";
var L11_1;
(function (L11_1) {
    class Clouds extends L11_1.Movable {
        /*posX: number;
        posY: number;
        velocityX: number = 0.5; */
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        draw() {
            L11_1.crc2.save();
            L11_1.crc2.translate(this.startPosX, this.startPosY);
            L11_1.crc2.beginPath();
            L11_1.crc2.arc(this.startPosX, this.startPosY, 60, Math.PI * 0.5, Math.PI * 1.5);
            L11_1.crc2.arc(this.startPosX + 70, this.startPosY - 60, 70, Math.PI * 1, Math.PI * 1.85);
            L11_1.crc2.arc(this.startPosX + 152, this.startPosY - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            L11_1.crc2.arc(this.startPosX + 200, this.startPosY, 60, Math.PI * 1.5, Math.PI * 0.5);
            L11_1.crc2.moveTo(this.startPosX + 200, this.startPosY + 60);
            L11_1.crc2.lineTo(this.startPosX, this.startPosY + 60);
            L11_1.crc2.strokeStyle = "HSLA(0, 10%, 90%, 0.4)";
            L11_1.crc2.stroke();
            L11_1.crc2.fillStyle = "HSLA(0, 0%, 100%, 0.4)";
            L11_1.crc2.fill();
            L11_1.crc2.restore();
        }
        update() {
            if (this.startPosX > L11_1.crc2.canvas.width || this.startPosX < 0) {
                this.velocityX = -this.velocityX;
            }
            this.startPosX += this.velocityX;
            //this.draw();
        }
    } //Ende class
    L11_1.Clouds = Clouds;
})(L11_1 || (L11_1 = {}));
//# sourceMappingURL=cloud.js.map