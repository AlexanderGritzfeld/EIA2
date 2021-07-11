namespace SoSe21 {

    export class Player extends Movable {

        constructor(_position: Vector, _velocity: Vector) { //_randomScale: number
            
            super(_position, _velocity);

        } //end constructor

        draw(): void {

            console.log("Test");

            crc2.save();
            crc2.translate(this.startPosX, this.startPosY);

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "red";
            crc2.lineWidth = 2;
            crc2.arc(this.startPosX, this.startPosY, 50, 0, 2 * Math.PI);
            crc2.stroke(); 
            crc2.fill();
            crc2.restore();

        }

    } //end class Player

}