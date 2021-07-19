namespace SoSe21 {

    export class Vector {

        public x: number;
        public y: number;

        constructor(_x: number = 0, _y: number = 0) {

            this.set(_x, _y);

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