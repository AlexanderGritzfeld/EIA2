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
        drawBackground();
        console.log("load");
    } //end handleLoad
    //startForm.addEventListener("change", handleForm);
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
        
    } */
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
        drawBall();
        animate();
        startFormForm.classList.add("is-hidden");
    } //end function startGame
    function drawTeam(_nPlayers) {
        for (let i = 0; i < _nPlayers; i++) {
            movable.push(new SoSe21.Player(new SoSe21.Vector(SoSe21.startPosRight[i].x, SoSe21.startPosRight[i].y), 0.5, color1, "right"));
            //movable.push(<Movable> new Player(new Vector (x: crc2.canvas.width / (i + 1), y: crc2.canvas.height / (i + 1)), { x: 0.5, y: 0.5 }, color1, color2));
            console.log("Spieler Rechts Nummer: " + (i + 1));
        } //end for
    } //end drawTeam 
    function drawOtherTeam(_nPlayers) {
        for (let i = 0; i < _nPlayers; i++) {
            movable.push(new SoSe21.Player(new SoSe21.Vector(SoSe21.startPosLeft[i].x, SoSe21.startPosLeft[i].y), 0.5, color2, "left"));
            //movable.push(<Movable> new Player(new Vector (x: crc2.canvas.width / (i + 1), y: crc2.canvas.height / (i + 1)), { x: 0.5, y: 0.5 }, color1, color2));
            console.log("Spieler Links Nummer: " + (i + 1));
        } //end for
    } //end drawOtherTeam 
    function drawOther() {
        movable.push(new SoSe21.OtherHuman(new SoSe21.Vector(225, 35), 0.5));
        movable.push(new SoSe21.OtherHuman(new SoSe21.Vector(875, 35), 0.5));
        movable.push(new SoSe21.OtherHuman(new SoSe21.Vector(SoSe21.crc2.canvas.width / 2, 250), 0.5));
    }
    function drawBall() {
        movable.push(new SoSe21.Ball(new SoSe21.Vector(SoSe21.crc2.canvas.width / 2, SoSe21.crc2.canvas.height / 2), 0.6));
    }
    SoSe21.j = 0;
    function animate() {
        console.log("movable.length: " + movable.length);
        //erst das Team Nr 1 wird gemalt
        while (SoSe21.j < 11) {
            movable[SoSe21.j].update();
            movable[SoSe21.j].draw();
            SoSe21.j++;
        } // end while
        //jetzt wird das andere Team gemalt
        while (SoSe21.j < 22 && SoSe21.j >= 11) {
            movable[SoSe21.j].update();
            movable[SoSe21.j].draw();
            SoSe21.j++;
        } // end while
        //nun die Linienrichter
        while (SoSe21.j < (24) && SoSe21.j >= 22) {
            movable[SoSe21.j].update();
            movable[SoSe21.j].draw();
            SoSe21.j++;
        }
        //und der Schiri
        while (SoSe21.j < (25) && SoSe21.j >= 24) {
            movable[SoSe21.j].update();
            movable[SoSe21.j].draw();
            SoSe21.j++;
        }
        //und zum Schluss noch der Ball
        while (SoSe21.j < (26) && SoSe21.j >= 25) {
            movable[SoSe21.j].update();
            movable[SoSe21.j].draw();
            SoSe21.j++;
        }
    } //end animate
})(SoSe21 || (SoSe21 = {})); //end namespace
//# sourceMappingURL=AbschlussarbeitSoSe21.js.map