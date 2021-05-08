"use strict";
var canvas;
(function (canvas_1) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log("Zufällige Farbe: #" + randomColor);
    crc2.fillStyle = "#" + randomColor;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    let colors = ["antiqueWhite", "aqua", "darkOrchid", "indianRed", "khaki"];
    for (let i = 0; i < 8; i++) {
        let v = Math.floor(Math.random() * Math.floor(canvas.width));
        let w = Math.floor(Math.random() * Math.floor(canvas.height));
        let randomNumberArray = Math.floor(Math.random() * Math.floor(5));
        crc2.beginPath();
        crc2.arc(v, w, 200, 0, 2 * Math.PI, false);
        crc2.fillStyle = colors[randomNumberArray];
        crc2.fill();
    }
    let x = 20;
    let y = 20;
    let a = 50;
    let b = 550;
    for (let index = 0; index < 50; index++) {
        let x2 = x + Math.floor(Math.random() * 30);
        let y2 = y + Math.floor(Math.random() * 30);
        let y3 = y2 + Math.floor(Math.random() * 30);
        console.log("x " + x);
        console.log("x2 " + x2);
        console.log("y " + y);
        console.log("y2 " + y2);
        console.log("y3 " + y3);
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.moveTo(x, y);
        crc2.lineTo(x2, y2);
        crc2.lineTo(x, y3);
        crc2.closePath();
        crc2.stroke();
        x = x + Math.floor(Math.random() * 30);
        y = y + Math.floor(Math.random() * 30);
        crc2.beginPath();
        crc2.arc(x2 + 32, y2, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.stroke();
        let a2 = a + Math.floor(Math.random() * 100);
        let b2 = b - Math.floor(Math.random() * 100);
        crc2.beginPath();
        crc2.moveTo(a, b);
        crc2.lineTo(a2, b2);
        crc2.strokeStyle = "salmon";
        crc2.stroke();
    }
})(canvas || (canvas = {}));
//# sourceMappingURL=canvas.js.map