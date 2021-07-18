"use strict";
var SoSe21;
(function (SoSe21) {
    class Player extends SoSe21.Movable {
        constructor(_position, _velocity, _color1, _color2) {
            super(_position, _velocity);
            /*
            //Startpositionen Team links
            startPosLeft: Vector[] = [{x: 75, y: 350}, {x: 250, y: 100}, {x: 250, y: 600}, {x: 350, y: 250}, {x: 350, y: 450}, {x: 450, y: 350},
                {x: 675, y: 250}, {x: 675, y: 450}, {x: 750, y: 350}, {x: 750, y: 150}, {x: 750, y: 550}];
    
            //Startpositionen Team rechts
            startPosRight: Vector[] = [{x: 1025, y: 350}, {x: 850, y: 100}, {x: 850, y: 600}, {x: 750, y: 250}, {x: 750, y: 450}, {x: 650, y: 350},
                {x: 425, y: 250}, {x: 425, y: 450}, {x: 350, y: 350}, {x: 350, y: 150}, {x: 350, y: 550}];
            */
            //Startpositionen Team links
            this.startPosPlayer = [{ x: 75, y: 350 }, { x: 250, y: 100 }, { x: 250, y: 600 }, { x: 350, y: 250 }, { x: 350, y: 450 }, { x: 450, y: 350 },
                { x: 675, y: 250 }, { x: 675, y: 450 }, { x: 750, y: 350 }, { x: 750, y: 150 }, { x: 750, y: 550 },
                //Startpositionen Team rechts
                { x: 1025, y: 350 }, { x: 850, y: 100 }, { x: 850, y: 600 }, { x: 750, y: 250 }, { x: 750, y: 450 }, { x: 650, y: 350 },
                { x: 425, y: 250 }, { x: 425, y: 450 }, { x: 350, y: 350 }, { x: 350, y: 150 }, { x: 350, y: 550 }];
            this.color1 = _color1;
            this.color2 = _color2;
        } //end constructor
        draw() {
            if (SoSe21.j < 11) {
                SoSe21.crc2.save();
                //crc2.translate(this.startPosX, this.startPosY);
                //console.info("j ist gerade: " + j);
                SoSe21.crc2.beginPath();
                SoSe21.crc2.strokeStyle = "black";
                SoSe21.crc2.fillStyle = this.color1;
                SoSe21.crc2.lineWidth = 2;
                SoSe21.crc2.arc(this.startPosPlayer[SoSe21.j].x, this.startPosPlayer[SoSe21.j].y, 7, 0, 2 * Math.PI);
                SoSe21.crc2.stroke();
                SoSe21.crc2.fill();
                SoSe21.crc2.restore();
            }
            if (SoSe21.j >= 11) {
                //Test
                SoSe21.crc2.save();
                //crc2.translate(this.startPosX, this.startPosY);
                SoSe21.crc2.beginPath();
                SoSe21.crc2.strokeStyle = "black";
                SoSe21.crc2.fillStyle = this.color2;
                SoSe21.crc2.lineWidth = 2;
                SoSe21.crc2.arc(this.startPosPlayer[SoSe21.j].x, this.startPosPlayer[SoSe21.j].y, 7, 0, 2 * Math.PI);
                SoSe21.crc2.stroke();
                SoSe21.crc2.fill();
                SoSe21.crc2.restore();
                console.log("Nach 1 Durchlauf draw(): " + SoSe21.j);
            }
        } //end draw
    } //end class Player
    SoSe21.Player = Player;
})(SoSe21 || (SoSe21 = {}));
//# sourceMappingURL=Player.js.map