"use strict";
var canvas;
(function (canvas_1) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    crc2.fillStyle = "#ff0000";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.beginPath();
    crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
    crc2.closePath();
    crc2.strokeStyle = "#ff00ff";
    crc2.stroke();
})(canvas || (canvas = {}));
//# sourceMappingURL=canvas.js.map