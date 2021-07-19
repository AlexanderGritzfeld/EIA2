namespace SoSe21 {


    window.addEventListener("load", handleLoad);

    //im Prinzip eine einfachere und kompaktere Definition von Aufgaben (wird später referiert)
    export enum Task {

        lookForBall,
        walkToBall,
        shootTheBall,
        walkToStartPos
    }

    export interface Vector {
        x: number;
        y: number;
    }

    export let crc2: CanvasRenderingContext2D;

    let imageData: ImageData;

    export let movable: Movable[] = [];
    export let ball: Ball;

    export let animationSwitch: boolean = true;


    //HTML Elemente

    let startFormForm: HTMLFormElement;
    let formData: FormData;
    let start: HTMLButtonElement;

    startFormForm = <HTMLFormElement> document.querySelector("#startFormForm");
    start = <HTMLButtonElement> document.querySelector("#start");



    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas = <HTMLCanvasElement>document.querySelector("canvas"); 
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();

        console.log("load");

    } //end handleLoad

    //startForm.addEventListener("change", handleForm);

    function drawBackground(): void {

        drawField();

    }
    
    let color1: string;
    let color2: string;

    start.addEventListener("click", startGame);

    function startGame(): void {
        
        formData = new FormData(document.forms[0]);
        color1 = <string>formData.get("team1Color")?.toString();
        color2 = <string>formData.get("team2Color")?.toString();

        drawTeam(11);
        drawOtherTeam(11);
        drawOther();
        
        imageData = crc2.getImageData(0, 0, 1100, 700);
        ball = new Ball(new Vector(550, 350), 0.5);

        animate();

        startFormForm.classList.add("is-hidden");
        
    } //end function startGame
    
    

    function drawTeam(_nPlayers: number): void {

        for (let i: number = 0; i < _nPlayers; i++) {

        movable.push(<Movable> new Player(new Vector(startPosRight[i].x, startPosRight[i].y), 0.5, color1, "right"));
        //movable.push(<Movable> new Player(new Vector (x: crc2.canvas.width / (i + 1), y: crc2.canvas.height / (i + 1)), { x: 0.5, y: 0.5 }, color1, color2));

        console.log("Spieler Rechts Nummer: " + (i + 1) );
    
        } //end for

    } //end drawTeam 

    function drawOtherTeam(_nPlayers: number): void {

        for (let i: number = 0; i < _nPlayers; i++) {

        movable.push(<Movable> new Player(new Vector(startPosLeft[i].x, startPosLeft[i].y), 0.5, color2, "left"));
        //movable.push(<Movable> new Player(new Vector (x: crc2.canvas.width / (i + 1), y: crc2.canvas.height / (i + 1)), { x: 0.5, y: 0.5 }, color1, color2));

        console.log("Spieler Links Nummer: " + (i + 1) );
    
        } //end for

    } //end drawOtherTeam 



    function drawOther(): void {

        movable.push(<Movable> new OtherHuman(new Vector( 225, 35), 0.5));
        movable.push(<Movable> new OtherHuman(new Vector ( 875, 35), 0.5));
        movable.push(<Movable> new OtherHuman(new Vector (crc2.canvas.width / 2, 250), 0.5));

    }
    
    function animate(): void {

        if (animationSwitch == true) { //damit kann man die Animation stoppen, sobald ein Spieler den Ball hat

            requestAnimationFrame(animate);
            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.putImageData(imageData, 0, 0);

            for (let j: number = 0; j < movable.length; j++) {

                movable[j].update();
                movable[j].draw();

            } //end for

            //ball.update();
            ball.draw();

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

} //end namespace