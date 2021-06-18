namespace L11_1 {

    //inspiriert und teilweise entnommen von Jirka seinem Code "Allay.ts"

    window.addEventListener("load", handleLoad);

    export interface Vector {
        x: number;
        y: number;
    }

    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;

    //let clouds: Clouds[] = [];
    //let bees: Bees[] = [];
    let movable: Movable[] = [];
    let flowers: Flowers[] = [];

    let imageData: ImageData;

    export let greenColors: string[] = ["darkGreen", "forestGreen", "green", "oliveDrab", "seaGreen"];

    

    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas = <HTMLCanvasElement>document.querySelector("canvas"); 
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        drawBackground();
        drawTree();
        drawCloud();
        drawFlower();
        drawBee(10);
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
        
    }

    function drawBackground(): void {

        let horizon: number = crc2.canvas.height * golden;    
        let posMountains: Vector = { x: 0, y: horizon };

        drawSkyAndLawn();
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawSun({ x: crc2.canvas.width - 100, y: 75 });

        console.log("Test_BG");

    }

    function drawCloud(): void {

        movable.push(<Movable> new Clouds({ x: crc2.canvas.width * .10, y: crc2.canvas.height * .10 }, { x: 0.5, y:  0.0}));

        console.log("Test_Cloud");

    }

    function drawTree(): void {

        drawTreeLog({ x: 50, y: crc2.canvas.height});
        drawLeaves({ x: 175, y: 100 }, { x: 350, y: 100 });

    }

    function drawFlower(): void {

        flowers.push(new Flowers({x: crc2.canvas.width / 4, y: crc2.canvas.height - 50}));

    }

    function drawBee(_nBees: number): void {
        
        for (let i: number = 0; i < _nBees; i++) {
            
            //let randomScale: number = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX: number = (Math.random() - 0.5) * 5;
            let randomVelocityY: number = (Math.random() - 0.5) * 5;

            movable.push(<Movable> new Bees({ x: crc2.canvas.width / 4, y: crc2.canvas.height * golden / 2.4}, { x: randomVelocityX, y: randomVelocityY })); //, randomScale

        }

    }

    function animate(): void {

        requestAnimationFrame(animate);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let index: number = 0; index < movable.length; index ++) {
            movable[index].update();
            movable[index].draw();
            
        } // Ende for

    } //Ende animate

}