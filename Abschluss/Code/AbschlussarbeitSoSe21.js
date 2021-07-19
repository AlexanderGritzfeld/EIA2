"use strict";
var SoSe21;
(function (SoSe21) {
    window.addEventListener("load", handleLoad);
    //im Prinzip eine einfachere und kompaktere Definition von Aufgaben (wird später referiert)
    let Task;
    (function (Task) {
        Task[Task["lookForBall"] = 0] = "lookForBall";
        Task[Task["walkToBall"] = 1] = "walkToBall";
        Task[Task["shootTheBall"] = 2] = "shootTheBall";
        Task[Task["walkToStartPos"] = 3] = "walkToStartPos";
    })(Task = SoSe21.Task || (SoSe21.Task = {}));
    let imageData;
    SoSe21.movable = [];
    SoSe21.animationSwitch = true;
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
        drawBackground();
        console.log("load");
    } //end handleLoad
    //startForm.addEventListener("change", handleForm);
    function drawBackground() {
        SoSe21.drawField();
    }
    let color1;
    let color2;
    start.addEventListener("click", startGame);
    function startGame() {
        formData = new FormData(document.forms[0]);
        color1 = formData.get("team1Color")?.toString();
        color2 = formData.get("team2Color")?.toString();
        drawTeam(11);
        drawOtherTeam(11);
        drawOther();
        imageData = SoSe21.crc2.getImageData(0, 0, 1100, 700);
        SoSe21.ball = new SoSe21.Ball(new SoSe21.Vector(550, 350), 0.5);
        animate();
        startFormForm.classList.add("is-hidden");
    } //end function startGame
    function drawTeam(_nPlayers) {
        for (let i = 0; i < _nPlayers; i++) {
            SoSe21.movable.push(new SoSe21.Player(new SoSe21.Vector(SoSe21.startPosRight[i].x, SoSe21.startPosRight[i].y), 0.5, color1, "right"));
            //movable.push(<Movable> new Player(new Vector (x: crc2.canvas.width / (i + 1), y: crc2.canvas.height / (i + 1)), { x: 0.5, y: 0.5 }, color1, color2));
            console.log("Spieler Rechts Nummer: " + (i + 1));
        } //end for
    } //end drawTeam 
    function drawOtherTeam(_nPlayers) {
        for (let i = 0; i < _nPlayers; i++) {
            SoSe21.movable.push(new SoSe21.Player(new SoSe21.Vector(SoSe21.startPosLeft[i].x, SoSe21.startPosLeft[i].y), 0.5, color2, "left"));
            //movable.push(<Movable> new Player(new Vector (x: crc2.canvas.width / (i + 1), y: crc2.canvas.height / (i + 1)), { x: 0.5, y: 0.5 }, color1, color2));
            console.log("Spieler Links Nummer: " + (i + 1));
        } //end for
    } //end drawOtherTeam 
    function drawOther() {
        SoSe21.movable.push(new SoSe21.OtherHuman(new SoSe21.Vector(225, 35), 0.5));
        SoSe21.movable.push(new SoSe21.OtherHuman(new SoSe21.Vector(875, 35), 0.5));
        SoSe21.movable.push(new SoSe21.OtherHuman(new SoSe21.Vector(SoSe21.crc2.canvas.width / 2, 250), 0.5));
    }
    function animate() {
        if (SoSe21.animationSwitch == true) { //damit kann man die Animation stoppen, sobald ein Spieler den Ball hat
            requestAnimationFrame(animate);
            SoSe21.crc2.clearRect(0, 0, SoSe21.crc2.canvas.width, SoSe21.crc2.canvas.height);
            SoSe21.crc2.putImageData(imageData, 0, 0);
            for (let j = 0; j < SoSe21.movable.length; j++) {
                SoSe21.movable[j].update();
                SoSe21.movable[j].draw();
            } //end for
            //ball.update();
            SoSe21.ball.draw();
        } //end if
    } //end animate
    /*
    export let j: number = 0;

    function animate(): void {

        console.log("movable.length: " + movable.length);

        //erst das Team Nr 1 wird gemalt
        while (j < 11) {

            movable[j].update();
            movable[j].draw();
            
            j ++;

        } // end while

        console.log("Team 1 fertig");

        //jetzt wird das andere Team gemalt
        while (j < 22 && j >= 11) {

            movable[j].update();
            movable[j].draw();
            
            j ++;

        } // end while

        //nun die Linienrichter
        while (j < (24) && j >= 22) {

            movable[j].update();
            movable[j].draw();

            j++;
        }

        //und der Schiri
        while (j < (25) && j >= 24) {

            movable[j].update();
            movable[j].draw();

            j++;
        }

        /*und zum Schluss noch der Ball
        while (j < (26) && j >= 25) {

            movable[j].update();
            movable[j].draw();

            j++;
        }

        console.log("j ist: " + j); //
        
    } //end animate */
})(SoSe21 || (SoSe21 = {})); //end namespace
//# sourceMappingURL=AbschlussarbeitSoSe21.js.map