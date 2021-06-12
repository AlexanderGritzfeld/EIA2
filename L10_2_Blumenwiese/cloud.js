"use strict";
var L10_2;
(function (L10_2) {
    class Clouds {
        constructor(_position) {
            this.velocityX = 0.5;
            this.posY = _position.y;
            this.posX = _position.x;
        }
        draw() {
            L10_2.crc2.save();
            L10_2.crc2.translate(this.posX, this.posY);
            L10_2.crc2.beginPath();
            L10_2.crc2.arc(this.posX, this.posY, 60, Math.PI * 0.5, Math.PI * 1.5);
            L10_2.crc2.arc(this.posX + 70, this.posY - 60, 70, Math.PI * 1, Math.PI * 1.85);
            L10_2.crc2.arc(this.posX + 152, this.posY - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            L10_2.crc2.arc(this.posX + 200, this.posY, 60, Math.PI * 1.5, Math.PI * 0.5);
            L10_2.crc2.moveTo(this.posX + 200, this.posY + 60);
            L10_2.crc2.lineTo(this.posX, this.posY + 60);
            L10_2.crc2.strokeStyle = "HSLA(0, 10%, 90%, 0.4)";
            L10_2.crc2.stroke();
            L10_2.crc2.fillStyle = "HSLA(0, 0%, 100%, 0.4)";
            L10_2.crc2.fill();
            L10_2.crc2.restore();
        }
        update() {
            if (this.posX > L10_2.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            this.posX += this.velocityX;
            this.draw();
        }
    } //Ende class
    L10_2.Clouds = Clouds;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=cloud.js.map