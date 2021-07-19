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
    SoSe21.shootSwitch = false; // erst kicken, wenn Spieler ihn hat
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
        SoSe21.rect = canvas.getBoundingClientRect();
        canvas.addEventListener("click", shootTheBall);
        start.addEventListener("click", startGame);
        drawBackground();
    } //end handleLoad
    function drawBackground() {
        SoSe21.drawField();
    }
    let color1;
    let color2;
    function startGame() {
        formData = new FormData(document.forms[0]);
        color1 = formData.get("team1Color")?.toString();
        color2 = formData.get("team2Color")?.toString();
        drawTeam(11);
        drawOtherTeam(11);
        drawOther();
        imageData = SoSe21.crc2.getImageData(0, 0, 1100, 700);
        SoSe21.ball = new SoSe21.Ball(new SoSe21.Vector(550, 350), 0.6);
        startFormForm.classList.add("is-hidden");
        animate();
    } //end function startGame
    function shootTheBall(_event) {
        if (SoSe21.shootSwitch == true) {
            SoSe21.mouse = new SoSe21.Vector(_event.clientX - SoSe21.rect.left, _event.clientY - SoSe21.rect.top);
            SoSe21.playerCheck = true; //darf ich gekickt werden?
            SoSe21.ball.setNewPosition(SoSe21.mouse);
            SoSe21.animationSwitch = true;
            SoSe21.shootSwitch = false;
            animate();
        }
    }
    function drawTeam(_nPlayers) {
        for (let i = 0; i < _nPlayers; i++) {
            let playerRight = new SoSe21.Player(new SoSe21.Vector(SoSe21.startPosRight[i].x, SoSe21.startPosRight[i].y), 0.5, color1, "right");
            SoSe21.movable.push(playerRight);
        } //end for
    } //end drawTeam 
    function drawOtherTeam(_nPlayers) {
        for (let i = 0; i < _nPlayers; i++) {
            let playerLeft = new SoSe21.Player(new SoSe21.Vector(SoSe21.startPosLeft[i].x, SoSe21.startPosLeft[i].y), 0.45, color2, "left");
            SoSe21.movable.push(playerLeft);
            //movable.push(<Movable> new Player(new Vector(startPosLeft[i].x, startPosLeft[i].y), 0.45, color1, "left"));
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
            SoSe21.ball.update();
            SoSe21.ball.draw();
        } //end if
    } //end animate
})(SoSe21 || (SoSe21 = {})); //end namespace
//# sourceMappingURL=AbschlussarbeitSoSe21.js.map