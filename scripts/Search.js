function getCards(elementSelector) {
    return [...document.querySelectorAll(elementSelector)];
}

export function filterCards(searchValue, elementSelector, elementTitleSelector) {
    const cards = getCards(elementSelector);
    const inclusiveSearchValue = searchValue.toUpperCase(); //make search value not case sensitive

    cards.forEach(card => {
        const cardValue = card.querySelector(elementTitleSelector).textContent.toUpperCase();
        if (cardValue.indexOf(inclusiveSearchValue) > -1) {
            card.style.display = "";
        }
        else { 
            card.style.display = "none";
        }
    });
}