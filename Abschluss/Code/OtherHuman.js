"use strict";
var SoSe21;
(function (SoSe21) {
    class OtherHuman extends SoSe21.Movable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            //this.positionOther = _position;
        } //Ende constructor
        draw() {
            SoSe21.crc2.save();
            SoSe21.crc2.beginPath();
            SoSe21.crc2.strokeStyle = "black";
            SoSe21.crc2.fillStyle = "#808080";
            SoSe21.crc2.lineWidth = 2;
            SoSe21.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            SoSe21.crc2.stroke();
            SoSe21.crc2.fill();
            SoSe21.crc2.restore();
        } //ende draw
    }
    SoSe21.OtherHuman = OtherHuman;
})(SoSe21 || (SoSe21 = {}));
//# sourceMappingURL=OtherHuman.js.map