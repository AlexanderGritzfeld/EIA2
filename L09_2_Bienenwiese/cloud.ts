namespace L09_2 {

    export class Clouds {
        posX: number;
        posY: number; 
        velocityX: number = 0.5;

        constructor(_position: Vector) {
            this.posY = _position.y;
            this.posX = _position.x;
        }

        draw(): void {

            crc2.save();
            crc2.translate(this.posX, this.posY);

            crc2.beginPath();
            crc2.arc(this.posX, this.posY, 60, Math.PI * 0.5, Math.PI * 1.5);
            crc2.arc(this.posX + 70, this.posY - 60, 70, Math.PI * 1, Math.PI * 1.85);
            crc2.arc(this.posX + 152, this.posY - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            crc2.arc(this.posX + 200, this.posY, 60, Math.PI * 1.5, Math.PI * 0.5);
            crc2.moveTo(this.posX + 200, this.posY + 60);
            crc2.lineTo(this.posX, this.posY + 60);
            crc2.strokeStyle = "HSLA(0, 10%, 90%, 0.4)";
            crc2.stroke();
            crc2.fillStyle = "HSLA(0, 0%, 100%, 0.4)";
            crc2.fill();
            
            crc2.restore();
        }

        update(): void {
           
            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }

            this.posX += this.velocityX;
            
            this.draw();
        }

    }//Ende class

}