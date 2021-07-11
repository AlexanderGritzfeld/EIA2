"use strict";
var SoSe21;
(function (SoSe21) {
    class Player extends SoSe21.Movable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
        } //end constructor
        draw() {
            console.log("Test");
            SoSe21.crc2.save();
            SoSe21.crc2.translate(this.startPosX, this.startPosY);
            SoSe21.crc2.beginPath();
            SoSe21.crc2.strokeStyle = "black";
            SoSe21.crc2.fillStyle = "red";
            SoSe21.crc2.lineWidth = 2;
            SoSe21.crc2.arc(this.startPosX, this.startPosY, 50, 0, 2 * Math.PI);
            SoSe21.crc2.stroke();
            SoSe21.crc2.fill();
            SoSe21.crc2.restore();
        }
    } //end class Player
    SoSe21.Player = Player;
})(SoSe21 || (SoSe21 = {}));
//# sourceMappingURL=Player.js.map