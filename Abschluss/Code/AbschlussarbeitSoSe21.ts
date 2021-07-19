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
    
    export let mouse: Vector;
    export let rect: DOMRect;

    let imageData: ImageData;

    export let movable: Movable[] = [];
    export let ball: Ball;

    export let playerCheck: boolean;
    export let animationSwitch: boolean = true;
    export let shootSwitch: boolean = false; // erst kicken, wenn Spieler ihn hat


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
        
        rect = canvas.getBoundingClientRect();

        canvas.addEventListener("click", shootTheBall);
        start.addEventListener("click", startGame);

        drawBackground();

    } //end handleLoad

    
    function drawBackground(): void {

        drawField();

    }
    
    let color1: string;
    let color2: string;

    

    function startGame(): void {
        
        formData = new FormData(document.forms[0]);
        color1 = <string>formData.get("team1Color")?.toString();
        color2 = <string>formData.get("team2Color")?.toString();

        drawTeam(11);
        drawOtherTeam(11);
        drawOther();
        
        imageData = crc2.getImageData(0, 0, 1100, 700);
        ball = new Ball(new Vector(550, 350), 0.6);

        startFormForm.classList.add("is-hidden");

        animate();

    } //end function startGame

    function shootTheBall(_event: MouseEvent): void {

        console.log("pengu " + shootSwitch); //kommt nicht auf true


        if (shootSwitch == true) {

            mouse = new Vector(_event.clientX - rect.left, _event.clientY - rect.top);

            
            playerCheck = true; //darf ich gekickt werden?
            ball.setNewPosition(mouse);
            animationSwitch = true;
            shootSwitch = false;
            animate();
        }

        console.log("Maus: " + mouse);
    }
    
    

    function drawTeam(_nPlayers: number): void {

        for (let i: number = 0; i < _nPlayers; i++) {

            let playerRight: Player = new Player(new Vector(startPosRight[i].x, startPosRight[i].y), 0.5, color1, "right");

            movable.push(playerRight);

        //movable.push(<Movable> new Player(new Vector(startPosRight[i].x, startPosRight[i].y), 0.5, color1, "right"));
    
        } //end for

    } //end drawTeam 

    function drawOtherTeam(_nPlayers: number): void {

        for (let i: number = 0; i < _nPlayers; i++) {

            let playerLeft: Player = new Player(new Vector(startPosLeft[i].x, startPosLeft[i].y), 0.45, color2, "left");

            movable.push(playerLeft);

        //movable.push(<Movable> new Player(new Vector(startPosLeft[i].x, startPosLeft[i].y), 0.45, color1, "left"));
    
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

            ball.update();
            ball.draw();

        } //end if

    } //end animate

} //end namespace