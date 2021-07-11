namespace SoSe21 {


    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    console.log("Test");

    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas = <HTMLCanvasElement>document.querySelector("canvas"); 
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();


        /*canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; */
    } //end handleLoad

    function drawBackground(): void {

        drawField();

    }

} //end namespace