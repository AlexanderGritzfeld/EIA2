"use strict";
var L09Farm;
(function (L09Farm) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var pig = new L09Farm.Animal("pig", "legumes", "Oink!", 10);
        pig.sing();
        pig.eat();
        var cow = new L09Farm.Animal("cow", "weed", "Muh!", 50);
        cow.sing();
        cow.eat();
        var chicken = new L09Farm.Animal("chicken", "corn", "Bohkoh!", 20);
        chicken.sing();
        chicken.eat();
        var cat = new L09Farm.Animal("cat", "fish", "Miau!", 5);
        cat.sing();
        cat.eat();
        var dog = new L09Farm.Animal("dog", "meat", "Wuff!", 15);
        dog.sing();
        dog.eat();
    }
})(L09Farm || (L09Farm = {}));
//# sourceMappingURL=farm.js.map