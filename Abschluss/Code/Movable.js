"use strict";
var SoSe21;
(function (SoSe21) {
    class Movable {
        constructor(_position, _velocity) {
            /*this.startPosX = _position.x;
            this.startPosY = _position.y; */
            this.position = _position;
            this.velocity = _velocity;
        }
        draw() {
            //draw
        }
        update() {
            //update
        }
    } //end class Movable
    SoSe21.Movable = Movable;
})(SoSe21 || (SoSe21 = {}));
//# sourceMappingURL=Movable.js.map