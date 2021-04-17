"use strict";
var L02E;
(function (L02E) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let documentDivs = document.querySelectorAll("div");
        for (let i = 0; i < documentDivs.length; i++) {
            documentDivs[i].addEventListener("click", logInfo);
            documentDivs[i].addEventListener("keyup", logInfo);
        }
    }
    function setInfoBox(_event) {
        let spanElement = document.querySelector("#span");
        let x = _event.clientX;
        let y = _event.clientY;
        let mousePosition = "X-Coordinates: " + x + "," + "<br>" + "Y-Coordinates: " + y + ",";
        let eventTarget = _event.target;
        spanElement.innerHTML = mousePosition + "<br>" + eventTarget;
        spanElement.style.top = y + 8 + "px";
        spanElement.style.left = x + 10 + "px";
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath());
    }
})(L02E || (L02E = {})); //Ende namespace
//# sourceMappingURL=L02_EventInspectorT.js.map