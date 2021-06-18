namespace L11_1 {

    export class Flowers {

        positionX: number;
        positionY: number;
        petalColor: string[] = ["red", "white", "orange", "HSL(329, 100%, 24%)", "purple"];
        randomNumberArray: number = Math.floor(Math.random() * Math.floor(5));


        constructor(_position: Vector) {

            this.positionX = _position.x;
            this.positionY = _position.y;
            this.draw();
        }

        draw(): void {

            for (let flowers: number = 0; flowers < 11; flowers++) {

                //Stängel
                crc2.save();
                crc2.beginPath();
                crc2.fillStyle = "HSL(131, 100%, 24%)";
                crc2.moveTo(this.positionX, this.positionY);
                crc2.lineTo(this.positionX + 10, this.positionY);
                crc2.lineTo(this.positionX + 10, this.positionY - 75);
                crc2.lineTo(this.positionX, this.positionY - 75);
                crc2.closePath();
                crc2.fill();
                crc2.restore();
        
                //Blütenblätter
                crc2.save();
                crc2.beginPath();
                crc2.translate(this.positionX + 15, this.positionY - 75);
                crc2.fillStyle = this.petalColor[this.randomNumberArray];
                crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                crc2.fill();
                crc2.restore();
        
                crc2.save();
                crc2.beginPath();
                crc2.translate(this.positionX - 5, this.positionY - 75);
                crc2.fillStyle = this.petalColor[this.randomNumberArray];
                crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                crc2.fill();
                crc2.restore();
        
                crc2.save();
                crc2.beginPath();
                crc2.translate(this.positionX + 5, this.positionY - 67);
                crc2.fillStyle = this.petalColor[this.randomNumberArray];
                crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                crc2.fill();
                crc2.restore();
        
                crc2.save();
                crc2.beginPath();
                crc2.translate(this.positionX + 5, this.positionY - 83);
                crc2.fillStyle = this.petalColor[this.randomNumberArray];
                crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                crc2.fill();
                crc2.restore();
        
                //Blüte innen
                crc2.save();
                crc2.beginPath();
                crc2.translate(this.positionX + 5, this.positionY - 75);
                crc2.fillStyle = "yellow";
                crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                crc2.fill();
                crc2.restore();
        
                this.positionX = this.positionX + 100;
        
                }//Ende for Schleife

        }


    }//Ende class Flowers
}