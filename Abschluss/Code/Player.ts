namespace SoSe21 {

    export class Player extends Movable {
        
        
        /*Startpositionen Team links (otherTeam)
        startPosLeft: Vector[] = [{x: 75, y: 350}, {x: 250, y: 100}, {x: 250, y: 600}, {x: 350, y: 250}, {x: 350, y: 450}, {x: 450, y: 350},
            {x: 675, y: 250}, {x: 675, y: 450}, {x: 750, y: 350}, {x: 750, y: 150}, {x: 750, y: 550}]; 

        //Startpositionen Team rechts
        public startPosRight: Vector[] = [{x: 1025, y: 350}, {x: 850, y: 100}, {x: 850, y: 600}, {x: 750, y: 250}, {x: 750, y: 450}, {x: 650, y: 350},
            {x: 425, y: 250}, {x: 425, y: 450}, {x: 350, y: 350}, {x: 350, y: 150}, {x: 350, y: 550}];*/
        

        /*Startpositionen Team links
        private startPosPlayer: Vector[] = [{x: 75, y: 350}, {x: 250, y: 100}, {x: 250, y: 600}, {x: 350, y: 250}, {x: 350, y: 450}, {x: 450, y: 350},
            {x: 675, y: 250}, {x: 675, y: 450}, {x: 750, y: 350}, {x: 750, y: 150}, {x: 750, y: 550},

        //Startpositionen Team rechts
            {x: 1025, y: 350}, {x: 850, y: 100}, {x: 850, y: 600}, {x: 750, y: 250}, {x: 750, y: 450}, {x: 650, y: 350},
            {x: 425, y: 250}, {x: 425, y: 450}, {x: 350, y: 350}, {x: 350, y: 150}, {x: 350, y: 550}]; */
            
        private color: string;
        private startPos: Vector;
        private team: string;
        private task: Task = Task.lookForBall;
        private radius: number = 100;
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

            let ballPos: Vector = ball.ballPos;
            this.distancePlayerBall = Vector.getDistance
        }

        
        public draw(): void {

            crc2.save();
            //crc2.translate(this.startPosX, this.startPosY);

            //console.info("j ist gerade: " + j);

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = this.color;
            crc2.lineWidth = 2;
            crc2.arc(this.startPos.x, this.startPos.y, 7, 0, 2 * Math.PI);
            crc2.stroke(); 
            crc2.fill();
            crc2.restore();

            console.log("Ich gehöre zu Team: " + this.team);

        } //end draw

    } //end class Player

}