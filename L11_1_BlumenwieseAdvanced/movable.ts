namespace L11_1 {

    export class Movable {
        
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

        update(): void {

        //update
        }
        
    }

}