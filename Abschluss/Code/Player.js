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
            //console.log("set distence");
            let ballPos = SoSe21.ball.ballPos;
            //console.log("ballPos: " + ball.ballPos);
            this.distancePlayerBall = SoSe21.Vector.getDistance(ballPos, this.position);
            //console.log("distence fertig");
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
        } //end draw
        drawViewRadius() {
            SoSe21.crc2.beginPath();
            SoSe21.crc2.arc(this.position.x, this.position.y, this.viewRadius, 0, 2 * Math.PI);
            SoSe21.crc2.stroke();
            SoSe21.crc2.closePath();
        }
        update() {
            this.setDistance();
            //jenachdem welche Task gerade ansteht
            switch (this.task) {
                case SoSe21.Task.lookForBall:
                    //console.log("Ich bin dran");
                    if (this.distancePlayerBall < this.viewRadius) { //wenn Ball ich Sichtweite --> geh hin
                        //console.log("distance: " + this.distancePlayerBall);
                        this.task = SoSe21.Task.walkToBall;
                        //console.log("Ich gehe jetzt hin " + this.task);
                    }
                    //console.log("Ich sehe");
                    break;
                case SoSe21.Task.walkToBall:
                    //console.log("Also jetzt gehe ich hin?");
                    if (this.distancePlayerBall > this.viewRadius) { //wenn Ball nicht (mehr) in Sichtweite --> geh zur??ck
                        this.task = SoSe21.Task.walkToStartPos;
                    }
                    else {
                        if (this.distancePlayerBall < 10) { //wenn in Reichweite zum Ball --> schie??
                            this.task = SoSe21.Task.shootTheBall;
                            console.log("Ich m??chte jetzt schie??en");
                            console.log("Ich geh??re zu Team: " + this.team);
                        }
                        this.movePlayer(SoSe21.ball.ballPos);
                        //console.log("Ich bewege mich zum Ball");
                    } //end else walkToBall
                    break;
                case SoSe21.Task.shootTheBall:
                    if (this.distancePlayerBall > 10) {
                        SoSe21.ball.setBoolean(true); // setzt Schie??vorgang in Wege
                        console.log("Schade");
                        this.task = SoSe21.Task.walkToStartPos; //sobald gescho??en --> R??ckzug
                    }
                    break;
                case SoSe21.Task.walkToStartPos:
                    if (this.position == this.startPos) { //sobald wieder an Anfangsposition --> schaut nach Ball
                        this.task = SoSe21.Task.lookForBall;
                        //console.log("Ich bin bereit");
                    }
                    this.movePlayer(this.startPos);
            } //end switch
        } //end update
        movePlayer(_position) {
            let distance = SoSe21.Vector.getDifference(_position, this.position);
            if (distance.x == 0 && distance.y < 0) { //Fall: Ball ist n??rdlich von Spieler
                this.position.y -= this.velocity;
            }
            if (distance.x > 0 && distance.y < 0) { //Fall: Ball ist nord-??stlich von Spieler
                this.position.x += this.velocity;
                this.position.y -= this.velocity;
            }
            if (distance.x > 0 && distance.y == 0) { //Fall: Ball ist ??stlich von Spieler
                this.position.x += this.velocity;
            }
            if (distance.x > 0 && distance.y > 0) { //Fall: Ball ist s??d-??stlich von Spieler
                this.position.x += this.velocity;
                this.position.y += this.velocity;
            }
            if (distance.x == 0 && distance.y > 0) { //Fall: Ball ist s??dlich von Spieler
                this.position.y += this.velocity;
            }
            if (distance.x < 0 && distance.y > 0) { //Fall: Ball ist s??d-westlich von Spieler
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