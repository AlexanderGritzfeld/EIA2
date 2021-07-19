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

    let movable: Movable[] = [];


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

        drawTeam(22);
        drawOther();
        drawBall();
        animate();

        startFormForm.classList.add("is-hidden");
        
    } //end function startGame
    
    

    function drawTeam(_nPlayers: number): void {

        for (let i: number = 0; i < _nPlayers; i++) {

        movable.push(<Movable> new Player({ x: crc2.canvas.width / (i + 1), y: crc2.canvas.height / (i + 1)}, { x: 0.5, y: 0.5 }, color1, color2));
        //movable.push(<Movable> new Player(new Vector (x: crc2.canvas.width / (i + 1), y: crc2.canvas.height / (i + 1)), { x: 0.5, y: 0.5 }, color1, color2));

        console.log("Spieler Nummer: " + (i + 1) );
    
        } //end for

    } //end drawTeam 



    function drawOther(): void {

        movable.push(<Movable> new OtherHuman({ x: 225, y: 35}, { x: 0.5, y: 0.5 }));
        movable.push(<Movable> new OtherHuman({ x: 875, y: 35}, { x: 0.5, y: 0.5 }));
        movable.push(<Movable> new OtherHuman({ x: crc2.canvas.width / 2, y: 250}, { x: 0.5, y: 0.5 }));

    }



    function drawBall(): void {

        movable.push(<Movable> new Ball({ x: crc2.canvas.width / 2, y: crc2.canvas.height / 2}, { x: 0.6, y: 0.6}));
    }


    
    export let j: number = 0;

    function animate(): void {

        console.log("movable.length: " + movable.length);

        //erst das Team Nr 1 wird gemalt
        while (j < 11) { 

            movable[j].update();
            movable[j].draw();
            
            j ++;

        } // end while

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

        //und zum Schluss noch der Ball
        while (j < (26) && j >= 25) {

            movable[j].update();
            movable[j].draw();

            j++;
        }
        
    } //end animate

} //end namespace