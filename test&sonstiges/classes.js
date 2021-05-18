"use strict";
var classes;
(function (classes) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x = 0;
            this.y = 0;
        }
    }
    let v1 = new Vector();
    v1.scale(2);
    console.log(v1);
})(classes || (classes = {}));
//# sourceMappingURL=classes.js.map