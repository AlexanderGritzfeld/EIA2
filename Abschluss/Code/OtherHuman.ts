namespace SoSe21 {

    export class OtherHuman extends Movable {

        public positionOther: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            
            super(_position, _velocity);

            this.positionOther = _position;

        } //Ende constructor

        draw(): void {

            crc2.save();

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "#808080";
            crc2.lineWidth = 2;
            crc2.arc(this.positionOther.x, this.positionOther.y, 7, 0, 2 * Math.PI);
            crc2.stroke(); 
            crc2.fill();
            crc2.restore();

        } //ende draw

    }

}