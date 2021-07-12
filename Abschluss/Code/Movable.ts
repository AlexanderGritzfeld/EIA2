namespace SoSe21 {

    export abstract class Movable {
        
        startPosX: number;
        startPosY: number;

        velocityX: number;
        velocityY: number;

        constructor(_position: Vector, _velocity: Vector) {
            
            this.startPosX = _position.x;
            this.startPosY = _position.y;

            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }

        draw(): void {
            //draw
        }

        /*brauche ich das?
        pickColor(): void {
            //pick color
        }
        */

        update(): void {
        //update
        }
        
    } //end class Mivable

}