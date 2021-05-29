namespace L09_2 {

    //inspiriert und teilweise entnommen von Jirka seinem Code "Allay.ts"
    //erstellt mit der Hilfe von Huu Thien seinem Code

    export interface Vector {
        x: number;
        y: number;
    }

    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;

    let clouds: Clouds[] = [];
    let flowers: Flowers[] = [];
    let bees: Bees[] = [];

    let imageData: ImageData;

    let greenColors: string[] = ["darkGreen", "forestGreen", "green", "oliveDrab", "seaGreen"];

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        document.querySelector("canvas");   
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let horizon: number = crc2.canvas.height * golden;

        let posMountains: Vector = { x: 0, y: horizon };

        drawBackground();
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawSun({ x: crc2.canvas.width - 100, y: 75 });
        drawCloud();
        drawTreeLog({ x: 50, y: canvas.height});
        drawLeaves({ x: 175, y: 100 }, { x: 350, y: 100 });
        drawFlower();
        drawBee(10);
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
        
}


    function drawBackground(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {

        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
        
    }
    
    function drawSun(_position: Vector): void {

        let r1: number = 30;
        let r2: number = 140;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();

    }

    function drawCloud(): void {

        clouds.push(new Clouds({ x: crc2.canvas.width * .10, y: crc2.canvas.height * .10 }));

    }

    function drawTreeLog(_position: Vector): void {

        //Hauptstamm
        crc2.beginPath();
        crc2.fillStyle = "HSL(32, 100%, 8%)";
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x + 100, _position.y);
        crc2.lineTo(_position.x + 100, 20);
        crc2.lineTo(_position.x, 20);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        //Ast
        crc2.beginPath();
        crc2.fillStyle = "HSL(32, 100%, 8%)";
        crc2.moveTo(_position.x + 100, 200);
        crc2.lineTo(_position.x + 300, 100);
        crc2.lineTo(_position.x + 250, 100);
        crc2.lineTo(_position.x + 100, 150);
        crc2.closePath();
        crc2.fill();

        //Bienenstock gelb
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x + 180, 190);
        crc2.fillStyle = "HSL(51, 100%, 50%)";
        crc2.ellipse(0, 0, 60, 45, 1.5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();

        //Schwarz

        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x + 180, 220);
        crc2.fillStyle = "black";
        crc2.ellipse(0, 0, 16, 10.5, 1.5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawLeaves(_position: Vector, _size: Vector): void {

        let nParticles: number = 35;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        
        let randomNumberArray: number = Math.floor(Math.random() * Math.floor(5));

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

        crc2.save();
        crc2.translate(_position.x, _position.y);

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fillStyle = greenColors[randomNumberArray];
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawFlower(): void {

        flowers.push(new Flowers({x: crc2.canvas.width / 4, y: crc2.canvas.height - 50}));

    }

    function drawBee(_nBees: number): void {
        
        for (let i: number = 0; i < _nBees; i++) {
            
            let randomScale: number = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX: number = (Math.random() - 0.5) * 5;
            let randomVelocityY: number = (Math.random() - 0.5) * 5;

            bees.push(new Bees({ x: crc2.canvas.width / 4, y: crc2.canvas.height * golden / 2.4}, { x: randomVelocityX, y: randomVelocityY }, randomScale));

        }

    }

    function animate(): void {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);
        for (let index: number = 0; index < bees.length; index ++) {
            bees[index].update();
            
        }
        for (let index: number = 0; index < clouds.length; index ++) {
            clouds[index].update();
        }
    }

}