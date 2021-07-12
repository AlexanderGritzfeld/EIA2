namespace SoSe21 {


    window.addEventListener("load", handleLoad);

    export interface Vector {
        x: number;
        y: number;
    }

    export let crc2: CanvasRenderingContext2D;

    let movable: Movable[] = [];


    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas = <HTMLCanvasElement>document.querySelector("canvas"); 
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

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



    function drawBackground(): void {

        drawField();

    }

   

    function drawTeam(_nPlayers: number): void {

        for (let i: number = 0; i <= _nPlayers; i++) {

        movable.push(<Movable> new Player({ x: crc2.canvas.width / (i + 1), y: crc2.canvas.height / (i + 1)}, { x: 0.5, y: 0.5 }));

        console.log("Spieler Nummer: " + (i + 1) ); 
    
        } //end for

    } //end drawTeam 
    
    export let j: number = 0;

    function animate(): void {

        console.log("j geht in animate() rein: " + j);
        console.log(movable);
        console.log(movable.length);

         /*for (let index: number = 0; index < movable.length; index ++) {
            movable[index].update();
            movable[index].draw();

        } //end for */

        while (j < 11) { //

            movable[j].update();
            movable[j].draw();
            
            j ++;

        } // end while
        
    } //end animate

} //end namespace