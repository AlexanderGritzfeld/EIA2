namespace SoSe21 {

    export abstract class Movable {

        protected velocity: number;
        protected position: Vector;

        constructor(_position: Vector, _velocity: number) {

            this.position = _position;

            this.velocity = _velocity;
        }

        public draw(): void {
            //draw
        }

        public update(): void {
        //update
        }
        
    } //end class Movable

}