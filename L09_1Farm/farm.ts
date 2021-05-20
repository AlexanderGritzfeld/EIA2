namespace L09Farm {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        var pig: Animal = new Animal("pig", "legumes", "Oink!", 10);
        pig.sing();
        pig.eat();
        
        var cow: Animal = new Animal("cow", "weed", "Muh!", 50);
        cow.sing();
        cow.eat();
        
        var chicken: Animal = new Animal("chicken", "corn", "Bohkoh!", 20);
        chicken.sing();
        chicken.eat();
        
        var cat: Animal = new Animal("cat", "fish", "Miau!", 5);
        cat.sing();
        cat.eat();
        
        var dog: Animal = new Animal("dog", "meat", "Wuff!", 15);
        dog.sing();
        dog.eat();

    }

}