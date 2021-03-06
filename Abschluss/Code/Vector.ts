namespace SoSe21 {

    export class Vector {

        public x: number;
        public y: number;

        constructor(_x: number = 0, _y: number = 0) {

            this.set(_x, _y);

        }

        public static getDistance(_vector1: Vector, _vector2: Vector): number { //static weil wegen Berechnung und resultierender Wert

            let distanceX: number = _vector1.x - _vector2.x;
            let distanceY: number = _vector1.y - _vector2.y;

            return Math.hypot(distanceX, distanceY);
        }

          
        public static getDifference(_vector1: Vector, _vector2: Vector): Vector {

            return new Vector(_vector1.x - _vector2.x, _vector1.y - _vector2.y);

        }

        public set(_x: number, _y: number): void {

            this.x = _x;
            this.y = _y;

        }

        //Um irgendeinen Vektor zu "speichern" (z.B. für startPos)
        public copy(): Vector { //returnt ja einen Vektor und nicht void

            return new Vector(this.x, this.y);
            
        }

    } //end class Vector

}