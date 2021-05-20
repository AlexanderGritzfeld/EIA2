namespace L09Farm {

    export class Animal {
        name: string;
        food: string;
        sound: string;
        foodAmount: number;

        constructor(_name: string, _food: string, _sound: string, _foodAmount: number) {
            this.name = _name;
            this.food = _food;
            this.sound = _sound;
            this.foodAmount = _foodAmount;
        }

        sing(): void {
            console.log("Old MacDonald has a farm I-A-I-A-O." + " On this farm he has a " + this.name + " I-A-I-A-O." +
            " With a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there. I-A-I-A-O.");
        }

        eat(): void {
            console.log("The " + this.name + " has eaten. Now only " + (this.foodAmount - 1) + " units of " + this.food + " is left.");
        }
    }

}