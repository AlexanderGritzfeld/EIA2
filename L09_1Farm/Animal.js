"use strict";
var L09Farm;
(function (L09Farm) {
    class Animal {
        constructor(_name, _food, _sound, _foodAmount) {
            this.name = _name;
            this.food = _food;
            this.sound = _sound;
            this.foodAmount = _foodAmount;
        }
        sing() {
            console.log("Old MacDonald has a farm I-A-I-A-O." + " On this farm he has a " + this.name + " I-A-I-A-O." +
                " With a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there. I-A-I-A-O.");
        }
        eat() {
            console.log("The " + this.name + " has eaten. Now only " + (this.foodAmount - 1) + " units of " + this.food + " is left.");
        }
    }
    L09Farm.Animal = Animal;
})(L09Farm || (L09Farm = {}));
//# sourceMappingURL=Animal.js.map