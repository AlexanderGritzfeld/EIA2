"use strict";
var SoSe21;
(function (SoSe21) {
    window.addEventListener("load", handleLoad);
    let movable = [];
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas = document.querySelector("canvas");
        SoSe21.crc2 = canvas.getContext("2d");
        /*
        document.addEventListener ("mousemove", setInfoBox);
        document.addEventListener ("click", logInfo);
        document.body.addEventListener ("click", logInfo);
        */
        drawBackground();
        drawTeam(11);
        animate();
    } //end handleLoad
    /*
    function setInfoBox(_event: MouseEvent): void {
        let spanElement: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#span");
    
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let mousePosition: string = "X-Coordinates: " + x + "," + "<br>" + "Y-Coordinates: " + y + ",";
        let eventTarget: EventTarget = <EventTarget>_event.target;
    
        spanElement.innerHTML = mousePosition + "<br>" + eventTarget;
        spanElement.style.top = y + 8 + "px";
        spanElement.style.left = x + 10 + "px";
    }
    function logInfo(_event: Event): void {

        console.info("type: " + _event.type);
        console.log("target " + _event.target);
        console.log("current target " + _event.currentTarget);
        console.log("composed path " + _event.composedPath());
    } */
    function drawBackground() {
        SoSe21.drawField();
    }
    function drawTeam(_nPlayers) {
        for (let i = 0; i <= _nPlayers; i++) {
            movable.push(new SoSe21.Player({ x: SoSe21.crc2.canvas.width / (i + 1), y: SoSe21.crc2.canvas.height / (i + 1) }, { x: 0.5, y: 0.5 }));
            console.log("Spieler Nummer: " + (i + 1));
        } //end for
    } //end drawTeam 
    SoSe21.j = 0;
    function animate() {
        console.log("j geht in animate() rein: " + SoSe21.j);
        console.log(movable);
        console.log(movable.length);
        /*for (let index: number = 0; index < movable.length; index ++) {
           movable[index].update();
           movable[index].draw();

       } //end for */
        while (SoSe21.j < 11) { //
            movable[SoSe21.j].update();
            movable[SoSe21.j].draw();
            SoSe21.j++;
        } // end while
    } //end animate
})(SoSe21 || (SoSe21 = {})); //end namespace
//# sourceMappingURL=AbschlussarbeitSoSe21.js.map