namespace MemorySettings {

    console.log("test");

    let numberPairs: number;
    let cardContent: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    let cardArray: HTMLElement[] = [];
    let cardsOpen: number = 0;
    let cardsOpenArray: HTMLElement[] = [];
    let checkOthers: HTMLElement[] = [];

    window.addEventListener("load", startGame);
    function startGame(): void {
        let startMemory: HTMLElement = <HTMLElement>document.querySelector(".start");
        startMemory.addEventListener("click", main);
        console.log("test_click");
    }
    let gameArea: HTMLElement;
    let formData: FormData;
    let size: number;
    let bgColor: FormDataEntryValue | null;
    let cardColor: FormDataEntryValue | null;
    let fontColor: FormDataEntryValue | null;
    let fontStyle: FormDataEntryValue | null;

    function createCard(_cardContent: string): void {

        console.log("test_card");

        let card: HTMLElement = document.createElement("div");
    
        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.classList.add("card");
        card.classList.add("hidden");

        cardArray.push(card);
        checkOthers.push(card);
        card.addEventListener("click", clickHandler);

        card.style.width = size + "px";
        card.style.height = size + "px";

        if (bgColor) {
            
            gameArea.style.background = bgColor.toString();
        }

        
        if (fontColor) {
            card.style.color = fontColor.toString();
        }

        if (fontStyle) {
            card.style.fontFamily = fontStyle.toString();
        }

        if (cardColor) {
            card.style.backgroundColor = cardColor.toString();
        }
    }

    function clickHandler(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {

                if (target.classList.contains("hidden")) {

                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);

                }
            }
            else {

                cardsOpen--;

            }

            if (cardsOpen == 2) {

                setTimeout(compareCards, 600);

            }
        }
    }

    function compareCards(): void {

        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {

            for (let i: number = 0; i < 2; i++) {
                cardsOpenArray[1].classList.remove("open");
                cardsOpenArray[1].classList.add("done");
            }

            checkOthers.splice(0, 2);

        }

        else {

            for (let i: number = 0; i < cardsOpenArray.length; i++) {
                cardsOpenArray[1].classList.remove("open");
                cardsOpenArray[1].classList.add("hidden");
            }
        }

        cardsOpenArray = [];
        cardsOpen = 0;
        checkWin();
    }

    function checkWin(): void {
        if (checkOthers.length == 0) {
            alert("Gl??ckwunsch! Falls du nochmal m??chtest refreshe einfach die Seite.");
        }
    }

    function shuffleArray(_array: any[]): any[] {
        for (var i: number = _array.length - 1; i > 0; i--) {
            var j: number = Math.floor(Math.random() * (i + 1));
            var temp: number = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }

        return _array;
    }

    function main(_event: Event): void {

        let fieldset: HTMLFormElement = <HTMLFormElement>document.querySelector(".formular");
        if (fieldset.classList.contains("visible")) {

            console.log("text_visible");

            fieldset.classList.remove("visible");
            fieldset.classList.add("is_hidden");
        }

        formData = new FormData(document.forms[0]);
        //console.log(formData);

        size = Number(formData.get("Slider"));
        bgColor = formData.get("bgColor");
        cardColor = formData.get("CardColor");
        fontColor = formData.get("FontColor");
        fontStyle = formData.get("radio");

        let pairOfCards: FormDataEntryValue | null = formData.get("Stepper"); 
        if (pairOfCards) {
        numberPairs = Number(pairOfCards);
        }
        else {
            numberPairs = 5;
        }

        for (let i: number = 0; i < numberPairs; i++) {
            createCard(cardContent[i]);
            createCard(cardContent[i]);
        }

        shuffleArray(cardArray);

        for (let i: number = 0; i < cardArray.length; i++) {
            let user: HTMLDivElement = <HTMLDivElement>document.getElementById("gameArea");
            user.appendChild(cardArray[i]);
        }

    }

}