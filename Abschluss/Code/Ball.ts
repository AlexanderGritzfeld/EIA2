namespace SoSe21 {

    export class Ball extends Movable {

        public positionBall: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            
            super(_position, _velocity);

            this.positionBall = _position;

        } // end constructor

        draw(): void {

            crc2.save();

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "#f2f2f2";
            crc2.lineWidth = 2;
            crc2.arc(this.positionBall.x, this.positionBall.y, 5, 0, 2 * Math.PI);
            crc2.stroke(); 
            crc2.fill();
            crc2.restore();

        } //ende draw


    }

}