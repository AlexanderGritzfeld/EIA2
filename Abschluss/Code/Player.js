"use strict";
var SoSe21;
(function (SoSe21) {
    class Player extends SoSe21.Movable {
        constructor(_position, _velocity, _color, _team) {
            super(_position, _velocity);
            this.task = SoSe21.Task.lookForBall;
            this.viewRadius = 150;
            this.color = _color;
            this.startPos = this.position.copy(); //copy siehe Vector
            this.team = _team;
        } //end constructor
        get playerProperties() {
            return this.velocity;
        }
        get distance() {
            return this.distancePlayerBall;
        }
        setDistance() {
            console.log("set distence");
            let ballPos = SoSe21.ball.ballPos;
            console.log("ballPos: " + SoSe21.ball.ballPos);
            this.distancePlayerBall = SoSe21.Vector.getDistance(ballPos, this.position);
            console.log("distence fertig");
        }
        draw() {
            //crc2.save();
            //console.info("j ist gerade: " + j);
            SoSe21.crc2.beginPath();
            SoSe21.crc2.strokeStyle = "black";
            SoSe21.crc2.fillStyle = this.color;
            SoSe21.crc2.lineWidth = 2;
            SoSe21.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            SoSe21.crc2.stroke();
            SoSe21.crc2.fill();
            //crc2.restore();
            console.log("Ich gehöre zu Team: " + this.team);
        } //end draw
        drawViewRadius() {
            SoSe21.crc2.beginPath();
            SoSe21.crc2.arc(this.position.x, this.position.y, this.viewRadius, 0, 2 * Math.PI);
            SoSe21.crc2.stroke();
            SoSe21.crc2.closePath();
        }
        update() {
            this.setDistance();
            console.log("Los geht's");
            //jenachdem welche Task gerade ansteht
            switch (this.task) {
                case SoSe21.Task.lookForBall:
                    console.log("Ich bin dran");
                    if (this.distancePlayerBall < this.viewRadius) { //wenn Ball ich Sichtweite --> geh hin
                        console.log("distance: " + this.distancePlayerBall);
                        this.task = SoSe21.Task.walkToBall;
                        console.log("Ich gehe jetzt hin " + this.task);
                    }
                    console.log("Ich sehe");
                    break;
                case SoSe21.Task.walkToBall:
                    console.log("Also jetzt gehe ich hin?");
                    if (this.distancePlayerBall > this.viewRadius) { //wenn Ball nicht (mehr) in Sichtweite --> geh zurück
                        this.task = SoSe21.Task.walkToStartPos;
                    }
                    else {
                        if (this.distancePlayerBall < 15) { //wenn in Reichweite zum Ball --> schieß
                            this.task = SoSe21.Task.shootTheBall;
                            console.log("Ich möchte jetzt schießen");
                        }
                        this.movePlayer(SoSe21.ball.ballPos);
                        console.log("Ich bewege mich zum Ball");
                    } //end else walkToBall
                    break;
                case SoSe21.Task.shootTheBall:
                    SoSe21.ball.setBoolean(true); // setzt Schießvorgang in Wege
                    console.log("Ich schieße");
                    this.task = SoSe21.Task.walkToStartPos; //sobald geschoßen --> Rückzug
                    break;
                case SoSe21.Task.walkToStartPos:
                    if (this.position == this.startPos) { //sobald wieder an Anfangsposition --> schaut nach Ball
                        this.task = SoSe21.Task.lookForBall;
                        console.log("Ich bin bereit");
                    }
                    this.movePlayer(this.startPos);
            } //end switch
        } //end update
        movePlayer(_position) {
            let distance = SoSe21.Vector.getDifference(_position, this.position);
            if (distance.x == 0 && distance.y < 0) { //Fall: Ball ist nördlich von Spieler
                this.position.y -= this.velocity;
            }
            if (distance.x > 0 && distance.y < 0) { //Fall: Ball ist nord-östlich von Spieler
                this.position.x += this.velocity;
                this.position.y -= this.velocity;
            }
            if (distance.x > 0 && distance.y == 0) { //Fall: Ball ist östlich von Spieler
                this.position.x += this.velocity;
            }
            if (distance.x > 0 && distance.y > 0) { //Fall: Ball ist süd-östlich von Spieler
                this.position.x += this.velocity;
                this.position.y += this.velocity;
            }
            if (distance.x == 0 && distance.y > 0) { //Fall: Ball ist südlich von Spieler
                this.position.y += this.velocity;
            }
            if (distance.x < 0 && distance.y > 0) { //Fall: Ball ist süd-westlich von Spieler
                this.position.x -= this.velocity;
                this.position.y += this.velocity;
            }
            if (distance.x < 0 && distance.y == 0) { //Fall: Ball ist westlich von Spieler
                this.position.x -= this.velocity;
            }
            if (distance.x < 0 && distance.y < 0) { //Fall: Ball ist nord-westlich von Spieler
                this.position.x -= this.velocity;
                this.position.y -= this.velocity;
            }
            this.draw();
        } //end movePlayer
    } //end class Player
    SoSe21.Player = Player;
})(SoSe21 || (SoSe21 = {}));
//# sourceMappingURL=Player.js.map