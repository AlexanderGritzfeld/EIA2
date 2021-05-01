"use strict";
var MemorySettings;
(function (MemorySettings) {
    let numberPairs;
    let cardContent = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    let cardArray = [];
    let cardsOpen = 0;
    let cardsOpenArray = [];
    let checkOthers = [];
    window.addEventListener("load", startGame);
    function startGame() {
        let startMemory = document.querySelector(".start_bttn");
        startMemory.addEventListener("click", main);
    }
    let formData;
    let size;
    let bgColor;
    let cardColor;
    let fontColor;
    let fontStyle;
    function createCard(_cardContent) {
        let card = document.createElement("div");
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
})(MemorySettings || (MemorySettings = {}));
//# sourceMappingURL=Memo.js.map