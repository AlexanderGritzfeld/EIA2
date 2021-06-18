namespace L10_2 {

    export class Bees extends Movable {

        randomNumber: number = (Math.floor(Math.random() * 2000) + 1000);
        counter: number = 0;

        constructor(_position: Vector, _velocity: Vector) { //_randomScale: number
            
            super(_position, _velocity);
        }

        draw(): void {

            //wings
            crc2.save();
            crc2.translate(this.startPosX - 6, this.startPosY - 10);
    
            crc2.fillStyle = "HSLA(178, 100%, 50%, 0.7)";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = "HSLA(178, 100%, 50%, 0.7)";
            crc2.strokeStyle = "black";
            crc2.translate(this.startPosX + 6, this.startPosY - 10);
            crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.restore();

            //body yellow
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.startPosX, this.startPosY);
            crc2.fillStyle = "yellow";
            crc2.ellipse(0, 0, 16, 10.5, 3.1, 0, 2 * Math.PI);
            crc2.fill();
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.restore();

            //body black
            //crc2.save();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(this.startPosX - 4, this.startPosY + 10);
            crc2.lineTo(this.startPosX + 4, this.startPosY + 10);
            crc2.lineTo(this.startPosX + 4, this.startPosY - 10);
            crc2.lineTo(this.startPosX - 4, this.startPosY - 10);
            crc2.closePath();
            crc2.fill();

            crc2.restore();      
    
        }

        update(): void {

            if (this.startPosX > crc2.canvas.width || this.startPosX < 0) {
                this.velocityX = -this.velocityX;
            }

            if (this.startPosY > crc2.canvas.height || this.startPosY < crc2.canvas.height * 0.25) {
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
            this.counter ++;

            //this.draw();
        }

    } //Ende export class
}