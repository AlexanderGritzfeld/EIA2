"use strict";
var SoSe21;
(function (SoSe21) {
    window.addEventListener("load", handleLoad);
    let movable = [];
    //HTML Elemente
    let startFormForm;
    let formData;
    let start;
    startFormForm = document.querySelector("#startFormForm");
    start = document.querySelector("#start");
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
        console.log("load");
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
    //startForm.addEventListener("change", handleForm);
    let color1;
    let color2;
    /*function handleForm(): void {

        
        

        /*for (let entry of formData) {
            switch (entry[0]) {
                /*case "Select1":
                    team1 = String (entry[1]);
                    console.log(team1);
                    break;
                case "Select2":
                    team2 = String (entry[1]);
                    console.log(team2);
                    break; /

                case "team1Color":
                    color1 = String(entry[1]);
                    console.log(color1);
                    break;

                case "team2Color":
                    color2 = String(entry[1]);
                    console.log(color2);
                    break;

                default:
                    console.log("???");
            }

        } //


        console.log(formData.get("team1Color"));
        console.log(formData.get("team2Color"));
        
        
    } */
    function drawBackground() {
        SoSe21.drawField();
        console.log("Feld steht");
    }
    function drawTeam(_nPlayers) {
        for (let i = 0; i < _nPlayers; i++) {
            movable.push(new SoSe21.Player({ x: SoSe21.crc2.canvas.width / (i + 1), y: SoSe21.crc2.canvas.height / (i + 1) }, { x: 0.5, y: 0.5 }, color1, color2));
            console.log("Spieler Nummer: " + (i + 1));
        } //end for
    } //end drawTeam 
    SoSe21.j = 0;
    function animate() {
        console.log("length " + movable.length);
        /*for (let index: number = 0; index < movable.length; index ++) {
           movable[index].update();
           movable[index].draw();

       } //end for */
        while (SoSe21.j < 11) { //erst das Team Nr 1
            movable[SoSe21.j].update();
            movable[SoSe21.j].draw();
            SoSe21.j++;
        } // end while
        //jetzt wird das gegnerische Team gemalt
        while (SoSe21.j < 22 && SoSe21.j >= 11) {
            movable[SoSe21.j].update();
            movable[SoSe21.j].draw();
            SoSe21.j++;
        } // end while
        console.log("Ende Team");
    } //end animate
    start.addEventListener("click", startGame);
    function startGame() {
        formData = new FormData(document.forms[0]);
        color1 = formData.get("team1Color")?.toString();
        color2 = formData.get("team2Color")?.toString();
        drawTeam(22);
        animate();
        //console.log("Nach Start: " + color1, color2);
        startFormForm.classList.add("is-hidden");
    } //end function startGame
})(SoSe21 || (SoSe21 = {})); //end namespace
//# sourceMappingURL=AbschlussarbeitSoSe21.js.map