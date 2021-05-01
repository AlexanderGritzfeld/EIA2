namespace MemorySettings {

    let numberPairs: number;
    let cardContent: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    let cardArray: HTMLElement[] = [];
    let cardsOpen: number = 0;
    let cardsOpenArray: HTMLElement[] = [];
    let checkOthers: HTMLElement[] = [];

    window.addEventListener("load", startGame);
    function startGame(): void {
        let startMemory: HTMLElement = <HTMLElement>document.querySelector(".start_bttn");
        startMemory.addEventListener("click", main);
    }

    let formData: FormData;
    let size: number;
    let bgColor: FormDataEntryValue | null;
    let cardColor: FormDataEntryValue | null;
    let fontColor: FormDataEntryValue | null;
    let fontStyle: FormDataEntryValue | null;

    function createCard(_cardContent: string): void {

        let card: HTMLElement = document.createElement("div");
    
        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.classList.add("card");
        card.classList.add("is_hidden");

        cardArray.push(card);
        checkOthers.push(card);
        card.addEventListener("click", clickHandler);

        card.style.width = size + "px";
        card.style.height = size + "px";

        if (bgColor) {
            card.style.backgroundColor = bgColor.toString();
        }

        if (fontColor) {
            card.style.color = fontColor.toString();
        }

        if (fontStyle) {
            card.style.fontFamily = fontStyle.toString();
        }
    }


}