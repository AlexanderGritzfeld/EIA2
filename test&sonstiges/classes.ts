namespace classes {

    class Vector {
        x: number;
        y: number;
    
        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }
    
        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }
    
        set(_x: number, _y: number): void {
            this.x = 0;
            this.y = 0;
        }
    }

    let v1: Vector = new Vector();
    v1.scale(2);
    console.log(v1);

    
}