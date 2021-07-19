namespace SoSe21 {

    export class OtherHuman extends Movable {

        constructor(_position: Vector, _velocity: number) {
            
            super(_position, _velocity);

        } //Ende constructor

        draw(): void {

            crc2.save();

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "#808080";
            crc2.lineWidth = 2;
            crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            crc2.stroke(); 
            crc2.fill();
            crc2.restore();

        } //ende draw

    }

}