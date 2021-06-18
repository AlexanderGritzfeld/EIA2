namespace L10_2 {

    export function drawTreeLog(_position: Vector): void {

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

    export function drawLeaves(_position: Vector, _size: Vector): void {

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

}