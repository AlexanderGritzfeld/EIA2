"use strict";
var SoSe21;
(function (SoSe21) {
    class Vector {
        constructor(_x = 0, _y = 0) {
            this.set(_x, _y);
        }
        static getDistance(_vector1, _vector2) {
            let distanceX = _vector1.x - _vector2.x;
            let distanceY = _vector1.y - _vector2.y;
            return Math.hypot(distanceX, distanceY);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Um irgendeinen Vektor zu "speichern" (z.B. für startPos)
        copy() {
            return new Vector(this.x, this.y);
        }
    } //end class Vector
    SoSe21.Vector = Vector;
})(SoSe21 || (SoSe21 = {}));
//# sourceMappingURL=Vector.js.map