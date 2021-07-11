namespace SoSe21 {

    export function drawField(): void {

        //die Wiese
        crc2.fillStyle = "#29a329";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        //die Linie(n)
        
        //Spielfeld Umriss
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.moveTo(50, 50);
        crc2.lineTo(1050, 50);
        crc2.lineTo(1050, 650);
        crc2.lineTo(50, 650);
        crc2.closePath();
        crc2.stroke();

        //Tor links
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.moveTo(50, 300);
        crc2.lineTo(100, 300);
        crc2.lineTo(100, 400);
        crc2.lineTo(50, 400);
        crc2.stroke();

        //Tor rechts
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.moveTo(1050, 300);
        crc2.lineTo(1000, 300);
        crc2.lineTo(1000, 400);
        crc2.lineTo(1050, 400);
        crc2.stroke();

        //Bereich um Tor links
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.moveTo(50, 200);
        crc2.lineTo(225, 200);
        crc2.lineTo(225, 500);
        crc2.lineTo(50, 500);
        crc2.stroke();

        //Bereich um Tor rechts
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.moveTo(1050, 500);
        crc2.lineTo(875, 500);
        crc2.lineTo(875, 200);
        crc2.lineTo(1050, 200);
        crc2.stroke();

        //Kreis
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.arc(550, 350, 50, 0, 2 * Math.PI);
        crc2.stroke(); 

        //Mittellinie
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.moveTo(550, 50);
        crc2.lineTo(550, 650);
        crc2.stroke();

    } //end drawField

} //end namespace