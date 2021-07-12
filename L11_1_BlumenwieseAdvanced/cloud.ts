namespace L11_1 {

    export class Clouds extends Movable {
        
        /*posX: number;
        posY: number; 
        velocityX: number = 0.5; */

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
        }

        draw(): void {

            crc2.save();
            crc2.translate(this.startPosX, this.startPosY);

            crc2.beginPath();
            crc2.arc(this.startPosX, this.startPosY, 60, Math.PI * 0.5, Math.PI * 1.5);
            crc2.arc(this.startPosX + 70, this.startPosY - 60, 70, Math.PI * 1, Math.PI * 1.85);
            crc2.arc(this.startPosX + 152, this.startPosY - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            crc2.arc(this.startPosX + 200, this.startPosY, 60, Math.PI * 1.5, Math.PI * 0.5);
            crc2.moveTo(this.startPosX + 200, this.startPosY + 60);
            crc2.lineTo(this.startPosX, this.startPosY + 60);
            crc2.strokeStyle = "HSLA(0, 10%, 90%, 0.4)";
            crc2.stroke();
            crc2.fillStyle = "HSLA(0, 0%, 100%, 0.4)";
            crc2.fill();
            
            crc2.restore();
        }

        update(): void {
           
            if (this.startPosX > crc2.canvas.width || this.startPosX < 0) {
                this.velocityX = -this.velocityX;
            }

            this.startPosX += this.velocityX;

        }

    }//Ende class

}