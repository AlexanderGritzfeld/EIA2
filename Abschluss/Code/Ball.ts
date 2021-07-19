namespace SoSe21 {

    //export class Ball extends Movable {

    export class Ball {

        private ballmode: boolean = true;

        private position: Vector;

        //private velocity: number;


        constructor(_position: Vector, _velocity: number) {

            this.position = _position;
            this.draw();
            
            //super(_position, _velocity);

        } // end constructor

        public get ballPos(): Vector {

            return this.position;
        }

        public setBoolean(_boolean: boolean): void {

            this.ballmode = _boolean;

            console.log("Ball-Modus: " + this.ballmode);

        }

        draw(): void {

            crc2.save();

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "#f2f2f2";
            crc2.lineWidth = 2;
            crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            crc2.stroke(); 
            crc2.fill();
            crc2.restore();

        } //ende draw

        /*public move(_event: MouseEvent): void {

            let difference: Vector = new Vector(_event.offsetX - this.positionBall.x, _event.offsetY - this.positionBall.y);

        }*/

    }

}