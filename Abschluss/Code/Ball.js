"use strict";
var SoSe21;
(function (SoSe21) {
    //export class Ball extends Movable {
    class Ball {
        //private velocity: number;
        constructor(_position, _velocity) {
            this.ballMode = true;
            this.position = _position;
            this.draw();
            //super(_position, _velocity);
        } // end constructor
        get ballPos() {
            return this.position;
        }
        setBoolean(_boolean) {
            //console.log("ballMode alt: " + this.ballMode);
            console.log("activePlayerNumber: " + this.activePlayerNumber);
            this.ballMode = _boolean;
            //console.log("Ball-Modus: " + this.ballMode);
        }
        setNewPosition(_newPosition) {
            /*let distanceBall: number = Vector.getDistance(_newPosition, this.position);
            let activePlayer: Player = <Player>movable[this.activePlayerNumber];

            if (distanceBall > 400) { //wenn Spieler zu weit zielt, kommt Genauigkeit des Spielers ins Spiel

                this.newPosition.x = _newPosition.x + activePlayer.playerPrecision.x;
                this.newPosition.y = _newPosition.y + activePlayer.playerPrecision.y;
            }*/
            this.newPosition = _newPosition;
        }
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
        update() {
            if (SoSe21.playerCheck == true) {
                let smallDifference = SoSe21.Vector.getDifference(this.newPosition, this.position);
                if (Math.abs(smallDifference.x) < 1 && Math.abs(smallDifference.y) < 1) {
                    SoSe21.playerCheck = false;
                    this.checkEnviroment();
                } // end if
                else {
                    this.position.x += smallDifference.x / 20;
                    this.position.y += smallDifference.y / 20;
                    this.checkEnviroment();
                }
            } //end if playerCheck
            else {
                this.draw();
                this.checkEnviroment();
            }
        }
        checkEnviroment() {
            if (this.ballMode == true) {
                for (let i = 0; i < SoSe21.movable.length; i++) {
                    let activePlayer = SoSe21.movable[i];
                    if (activePlayer.distance < 10) {
                        this.activePlayerNumber = i;
                        SoSe21.animationSwitch = false;
                        this.ballMode = false;
                        SoSe21.shootSwitch = true;
                        break;
                    } //end if distance
                } //end for
            } //end if
        } //end checkEnviroment
    } //end class Ball
    SoSe21.Ball = Ball;
})(SoSe21 || (SoSe21 = {}));
//# sourceMappingURL=Ball.js.map