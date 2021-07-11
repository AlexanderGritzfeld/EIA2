"use strict";
var SoSe21;
(function (SoSe21) {
    class Movable {
        constructor(_position, _velocity) {
            this.startPosX = _position.x;
            this.startPosY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            //draw
        }
        /*brauche ich das?
        pickColor(): void {
            //pick color
        }
        */
        update() {
            //update
        }
    } //end class Mivable
    SoSe21.Movable = Movable;
})(SoSe21 || (SoSe21 = {}));
//# sourceMappingURL=Movable.js.map