namespace SoSe21 {

    export class Player extends Movable {
        
        /*
        //Startpositionen Team links
        startPosLeft: Vector[] = [{x: 75, y: 350}, {x: 250, y: 100}, {x: 250, y: 600}, {x: 350, y: 250}, {x: 350, y: 450}, {x: 450, y: 350},
            {x: 675, y: 250}, {x: 675, y: 450}, {x: 750, y: 350}, {x: 750, y: 150}, {x: 750, y: 550}];

        //Startpositionen Team rechts
        startPosRight: Vector[] = [{x: 1025, y: 350}, {x: 850, y: 100}, {x: 850, y: 600}, {x: 750, y: 250}, {x: 750, y: 450}, {x: 650, y: 350},
            {x: 425, y: 250}, {x: 425, y: 450}, {x: 350, y: 350}, {x: 350, y: 150}, {x: 350, y: 550}];
        */

        //Startpositionen Team links
        startPosPlayer: Vector[] = [{x: 75, y: 350}, {x: 250, y: 100}, {x: 250, y: 600}, {x: 350, y: 250}, {x: 350, y: 450}, {x: 450, y: 350},
            {x: 675, y: 250}, {x: 675, y: 450}, {x: 750, y: 350}, {x: 750, y: 150}, {x: 750, y: 550},

        //Startpositionen Team rechts
            {x: 1025, y: 350}, {x: 850, y: 100}, {x: 850, y: 600}, {x: 750, y: 250}, {x: 750, y: 450}, {x: 650, y: 350},
            {x: 425, y: 250}, {x: 425, y: 450}, {x: 350, y: 350}, {x: 350, y: 150}, {x: 350, y: 550}];
            


        constructor(_position: Vector, _velocity: Vector) {
            
            super(_position, _velocity);

        } //end constructor

        
        draw(): void {

            crc2.save();
            //crc2.translate(this.startPosX, this.startPosY);

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "red";
            crc2.lineWidth = 2;
            crc2.arc(this.startPosPlayer[j].x, this.startPosPlayer[j].y, 7, 0, 2 * Math.PI);
            crc2.stroke(); 
            crc2.fill();
            crc2.restore();

            

            //Test
            crc2.save();
            //crc2.translate(this.startPosX, this.startPosY);

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "blue";
            crc2.lineWidth = 2;
            crc2.arc(this.startPosPlayer[j].x, this.startPosPlayer[j].y, 7, 0, 2 * Math.PI);
            crc2.stroke(); 
            crc2.fill();
            crc2.restore();

            console.log("Nach 1 Durchlauf draw(): " + j);

        } //end draw

    } //end class Player

}