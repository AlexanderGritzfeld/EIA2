"use strict";
var SoSe21;
(function (SoSe21) {
    function drawField() {
        //die Wiese
        SoSe21.crc2.fillStyle = "#29a329";
        SoSe21.crc2.fillRect(0, 0, SoSe21.crc2.canvas.width, SoSe21.crc2.canvas.height);
        //die Linie(n)
        //Spielfeld Umriss
        SoSe21.crc2.beginPath();
        SoSe21.crc2.strokeStyle = "white";
        SoSe21.crc2.lineWidth = 5;
        SoSe21.crc2.moveTo(50, 50);
        SoSe21.crc2.lineTo(1050, 50);
        SoSe21.crc2.lineTo(1050, 650);
        SoSe21.crc2.lineTo(50, 650);
        SoSe21.crc2.closePath();
        SoSe21.crc2.stroke();
        //Tor links
        SoSe21.crc2.beginPath();
        SoSe21.crc2.strokeStyle = "white";
        SoSe21.crc2.lineWidth = 5;
        SoSe21.crc2.moveTo(50, 300);
        SoSe21.crc2.lineTo(100, 300);
        SoSe21.crc2.lineTo(100, 400);
        SoSe21.crc2.lineTo(50, 400);
        SoSe21.crc2.stroke();
        //Tor rechts
        SoSe21.crc2.beginPath();
        SoSe21.crc2.strokeStyle = "white";
        SoSe21.crc2.lineWidth = 5;
        SoSe21.crc2.moveTo(1050, 300);
        SoSe21.crc2.lineTo(1000, 300);
        SoSe21.crc2.lineTo(1000, 400);
        SoSe21.crc2.lineTo(1050, 400);
        SoSe21.crc2.stroke();
        //Bereich um Tor links
        SoSe21.crc2.beginPath();
        SoSe21.crc2.strokeStyle = "white";
        SoSe21.crc2.lineWidth = 5;
        SoSe21.crc2.moveTo(50, 200);
        SoSe21.crc2.lineTo(225, 200);
        SoSe21.crc2.lineTo(225, 500);
        SoSe21.crc2.lineTo(50, 500);
        SoSe21.crc2.stroke();
        //Bereich um Tor rechts
        SoSe21.crc2.beginPath();
        SoSe21.crc2.strokeStyle = "white";
        SoSe21.crc2.lineWidth = 5;
        SoSe21.crc2.moveTo(1050, 500);
        SoSe21.crc2.lineTo(875, 500);
        SoSe21.crc2.lineTo(875, 200);
        SoSe21.crc2.lineTo(1050, 200);
        SoSe21.crc2.stroke();
        //Kreis
        SoSe21.crc2.beginPath();
        SoSe21.crc2.strokeStyle = "white";
        SoSe21.crc2.lineWidth = 5;
        SoSe21.crc2.arc(550, 350, 50, 0, 2 * Math.PI);
        SoSe21.crc2.stroke();
        //Mittellinie
        SoSe21.crc2.beginPath();
        SoSe21.crc2.strokeStyle = "white";
        SoSe21.crc2.lineWidth = 5;
        SoSe21.crc2.moveTo(550, 50);
        SoSe21.crc2.lineTo(550, 650);
        SoSe21.crc2.stroke();
    } //end drawField
    SoSe21.drawField = drawField;
})(SoSe21 || (SoSe21 = {})); //end namespace
//# sourceMappingURL=Background.js.map