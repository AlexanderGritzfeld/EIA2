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

        drawBackground();
        drawTeam(11);

    } //end handleLoad

    function drawBackground(): void {

        drawField();

    }

    function drawTeam(_nPlayers: number): void {

        for (let i: number = 0; i <= _nPlayers; i++) {

        movable.push(<Movable> new Player());

        }

        
    }

} //end namespace