namespace SoSe21 {

    //export class Ball extends Movable {

    export class Ball {

        private ballMode: boolean = true;

        private position: Vector;
        private newPosition: Vector;
        private activePlayerNumber: number;

        //private velocity: number;


        constructor(_position: Vector, _velocity: number) {

            this.position = _position;
            this.draw();
            
            //super(_position, _velocity);

        } // end constructor

        public get ballPos(): Vector {

            return this.position;
        }

        public setBoolean(_boolean: boolean): void {

            //console.log("ballMode alt: " + this.ballMode);
            console.log("activePlayerNumber: " + this.activePlayerNumber);

            this.ballMode = _boolean;

            //console.log("Ball-Modus: " + this.ballMode);

        }

        public setNewPosition(_newPosition: Vector): void {

            /*let distanceBall: number = Vector.getDistance(_newPosition, this.position);
            let activePlayer: Player = <Player>movable[this.activePlayerNumber];

            if (distanceBall > 400) { //wenn Spieler zu weit zielt, kommt Genauigkeit des Spielers ins Spiel

                this.newPosition.x = _newPosition.x + activePlayer.playerPrecision.x;
                this.newPosition.y = _newPosition.y + activePlayer.playerPrecision.y;
            }*/

            this.newPosition = _newPosition;

        }

        draw(): void {

            crc2.save();

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "#f2f2f2";
            crc2.lineWidth = 2;
            crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            crc2.stroke(); 
            crc2.fill();
            crc2.restore();

        } //ende draw

        public update(): void {

            if (playerCheck == true) {

                let smallDifference: Vector = Vector.getDifference(this.newPosition, this.position);

                if (Math.abs(smallDifference.x) < 1 && Math.abs(smallDifference.y) < 1) {

                    playerCheck = false;
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

        checkEnviroment(): void {

            if (this.ballMode == true) {

                for (let i: number = 0; i < movable.length; i++) {

                    let activePlayer: Player = <Player>movable[i];

                    if (activePlayer.distance < 10) {

                        this.activePlayerNumber = i;
                        animationSwitch = false;
                        this.ballMode = false;
                        shootSwitch = true;
                        break;

                    } //end if distance

                } //end for

            } //end if

        } //end checkEnviroment




        /*public move(_event: MouseEvent): void {

            let difference: Vector = new Vector(_event.offsetX - this.positionBall.x, _event.offsetY - this.positionBall.y);

        }*/

    } //end class Ball

}