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
    function clickHandler(_event) {
        let target = _event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2) && target.classList.contains("is_hidden") && target != cardsOpenArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("is_hidden");
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
    function compareCards() {
        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
            for (let i = 0; i < 2; i++) {
                cardsOpenArray[1].classList.remove("open");
                cardsOpenArray[1].classList.add("done");
            }
            checkOthers.splice(0, 2);
        }
        else {
            for (let i = 0; i < cardsOpenArray.length; i++) {
                cardsOpenArray[1].classList.remove("open");
                cardsOpenArray[1].classList.add("hidden");
            }
        }
        cardsOpenArray = [];
        cardsOpen = 0;
        checkWin();
    }
    function checkWin() {
        if (checkOthers.length == 0)
            ;
    }
})(MemorySettings || (MemorySettings = {}));
//# sourceMappingURL=Memo.js.map