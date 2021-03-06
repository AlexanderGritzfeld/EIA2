namespace SoSe21 {

    export class Player extends Movable {
            
        private color: string;
        private startPos: Vector;
        private team: string;
        private task: Task = Task.lookForBall;
        private viewRadius: number = 150;
        private distancePlayerBall: number;




        constructor(_position: Vector, _velocity: number, _color: string, _team: string) {
            
            super(_position, _velocity);

            this.color = _color;
            this.startPos = this.position.copy(); //copy siehe Vector
            this.team = _team;

        } //end constructor

        public get playerProperties(): number {

            return this.velocity;
        }

        public get distance(): number {

            return this.distancePlayerBall;
        }

        setDistance(): void {

            //console.log("set distence");

            let ballPos: Vector = ball.ballPos;

            //console.log("ballPos: " + ball.ballPos);
            this.distancePlayerBall = Vector.getDistance(ballPos, this.position);

            //console.log("distence fertig");
        }

        
        public draw(): void {

            //crc2.save();

            //console.info("j ist gerade: " + j);

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = this.color;
            crc2.lineWidth = 2;
            crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            crc2.stroke(); 
            crc2.fill();
            //crc2.restore();

        } //end draw

        public drawViewRadius(): void {

            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.viewRadius, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
        }

        public update(): void {

            this.setDistance();

            //jenachdem welche Task gerade ansteht
            switch (this.task) {

                case Task.lookForBall:

                    //console.log("Ich bin dran");

                    if (this.distancePlayerBall < this.viewRadius) { //wenn Ball ich Sichtweite --> geh hin

                        //console.log("distance: " + this.distancePlayerBall);

                        this.task = Task.walkToBall;

                        //console.log("Ich gehe jetzt hin " + this.task);

                    }

                    //console.log("Ich sehe");

                    break;

                case Task.walkToBall:

                    //console.log("Also jetzt gehe ich hin?");

                    if (this.distancePlayerBall > this.viewRadius) { //wenn Ball nicht (mehr) in Sichtweite --> geh zur??ck

                        this.task = Task.walkToStartPos;

                    }

                    else {

                        if (this.distancePlayerBall < 10) { //wenn in Reichweite zum Ball --> schie??

                            this.task = Task.shootTheBall;

                            console.log("Ich m??chte jetzt schie??en");
                            console.log("Ich geh??re zu Team: " + this.team);
                        }

                        this.movePlayer(ball.ballPos);

                        //console.log("Ich bewege mich zum Ball");

                    } //end else walkToBall
                    
                    break;

                    case Task.shootTheBall:

                    if (this.distancePlayerBall > 10) {

                        ball.setBoolean(true); // setzt Schie??vorgang in Wege

                        console.log("Schade");

                        this.task = Task.walkToStartPos; //sobald gescho??en --> R??ckzug

                    }
                        
                    break;

                    case Task.walkToStartPos:

                        if (this.position == this.startPos) { //sobald wieder an Anfangsposition --> schaut nach Ball

                            this.task = Task.lookForBall;

                            //console.log("Ich bin bereit");
                        }

                        this.movePlayer(this.startPos);
                    
            } //end switch

        } //end update

        private movePlayer(_position: Vector): void {

            let distance: Vector = Vector.getDifference(_position, this.position);

            if (distance.x == 0 && distance.y < 0) {  //Fall: Ball ist n??rdlich von Spieler

                this.position.y -= this.velocity;

            }

            if (distance.x > 0 && distance.y < 0) {  //Fall: Ball ist nord-??stlich von Spieler

                this.position.x += this.velocity;
                this.position.y -= this.velocity;

            }

            if (distance.x > 0 && distance.y == 0) {  //Fall: Ball ist ??stlich von Spieler

                this.position.x += this.velocity;

            }

            if (distance.x > 0 && distance.y > 0) {  //Fall: Ball ist s??d-??stlich von Spieler

                this.position.x += this.velocity;
                this.position.y += this.velocity;

            }

            if (distance.x == 0 && distance.y > 0) {  //Fall: Ball ist s??dlich von Spieler

                this.position.y += this.velocity;

            }

            if (distance.x < 0 && distance.y > 0) {  //Fall: Ball ist s??d-westlich von Spieler

                this.position.x -= this.velocity;
                this.position.y += this.velocity;

            }

            if (distance.x < 0 && distance.y == 0) {  //Fall: Ball ist westlich von Spieler

                this.position.x -= this.velocity;

            }

            if (distance.x < 0 && distance.y < 0) {  //Fall: Ball ist nord-westlich von Spieler

                this.position.x -= this.velocity;
                this.position.y -= this.velocity;

            }

            this.draw();

        } //end movePlayer

    } //end class Player

}