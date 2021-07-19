namespace SoSe21 {

    export abstract class Movable {
        
        /* brauche ich das?
        startPosX: number;
        startPosY: number; */

        protected velocity: number;
        protected position: Vector;

        constructor(_position: Vector, _velocity: number) {
            
            /*this.startPosX = _position.x;
            this.startPosY = _position.y; */

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