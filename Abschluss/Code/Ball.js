"use strict";
var SoSe21;
(function (SoSe21) {
    class Ball extends SoSe21.Movable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            //this.positionBall = _position;
        } // end constructor
        draw() {
            SoSe21.crc2.save();
            SoSe21.crc2.beginPath();
            SoSe21.crc2.strokeStyle = "black";
            SoSe21.crc2.fillStyle = "#f2f2f2";
            SoSe21.crc2.lineWidth = 2;
            SoSe21.crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            SoSe21.crc2.stroke();
            SoSe21.crc2.fill();
            SoSe21.crc2.restore();
        } //ende draw
    }
    SoSe21.Ball = Ball;
})(SoSe21 || (SoSe21 = {}));
//# sourceMappingURL=Ball.js.map