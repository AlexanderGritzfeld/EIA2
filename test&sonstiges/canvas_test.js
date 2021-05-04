"use strict";
var test_canvas;
(function (test_canvas) {
    let canvas = document.querySelector("canvas");
    let crc2;
    crc2 = canvas.getContext("2d");
    crc2.fillStyle = "#ff0000";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.beginPath();
    crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
    crc2.closePath();
    crc2.strokeStyle = "#ff00ff";
    crc2.stroke();
})(test_canvas || (test_canvas = {}));
//# sourceMappingURL=canvas_test.js.map