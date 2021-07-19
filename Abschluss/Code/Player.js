"use strict";
var SoSe21;
(function (SoSe21) {
    class Player extends SoSe21.Movable {
        // private task: Task = Task.lookForBall;
        //private radius: number = 100;
        //private distancePlayerBall: number;
        constructor(_position, _velocity, _color, _team) {
            super(_position, _velocity);
            this.color = _color;
            this.startPos = this.position.copy(); //copy siehe Vector
            this.team = _team;
        } //end constructor
        draw() {
            SoSe21.crc2.save();
            //crc2.translate(this.startPosX, this.startPosY);
            //console.info("j ist gerade: " + j);
            SoSe21.crc2.beginPath();
            SoSe21.crc2.strokeStyle = "black";
            SoSe21.crc2.fillStyle = this.color;
            SoSe21.crc2.lineWidth = 2;
            SoSe21.crc2.arc(this.startPos.x, this.startPos.y, 7, 0, 2 * Math.PI);
            SoSe21.crc2.stroke();
            SoSe21.crc2.fill();
            SoSe21.crc2.restore();
            console.log("Ich gehöre zu Team: " + this.team);
        } //end draw
    } //end class Player
    SoSe21.Player = Player;
})(SoSe21 || (SoSe21 = {}));
//# sourceMappingURL=Player.js.map