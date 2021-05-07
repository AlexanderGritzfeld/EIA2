"use strict";
var canvas;
(function (canvas_1) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    //Test
    let randomR = Math.floor(Math.random() * 255) + 1;
    let randomG = Math.floor(Math.random() * 255) + 1;
    let randomB = Math.floor(Math.random() * 255) + 1;
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomR);
    console.log(randomG);
    console.log(randomB);
    console.log("Zufällige Farbe: #" + randomColor);
    crc2.fillStyle = "#" + randomColor;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.beginPath();
    crc2.arc(190, 100, 20, 0, 1.5 * Math.PI);
    crc2.closePath();
    crc2.strokeStyle = "#000000";
    crc2.stroke();
})(canvas || (canvas = {}));
//# sourceMappingURL=canvas.js.map