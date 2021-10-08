function getCards(elementSelector) {
    return [...document.querySelectorAll(elementSelector)];
}

function getCardsListItems(card, elementListItemSelector) {
    return [...card.querySelectorAll(elementListItemSelector)]
}

export function filterCards(searchValue, elementSelector, elementTitleSelector, elementListItemSelector) {
    const cards = getCards(elementSelector);
    const inclusiveSearchValue = searchValue.toUpperCase(); //make search value not case sensitive

    cards.forEach(card => {
        const cardValue = card.querySelector(elementTitleSelector).textContent.toUpperCase();
        const cardListItems = getCardsListItems(card, elementListItemSelector);
        let cardsSearchedItemsCounter = 0; 
        if (cardValue.indexOf(inclusiveSearchValue) > -1) {
            card.style.display = "";
            cardListItems.forEach(listItem => {
                listItem.style.display = "";
            })
        }
        else { 
            cardListItems.forEach(listItem => {
                const itemValue = listItem.textContent.toUpperCase();
                if (itemValue.indexOf(inclusiveSearchValue) > -1) {
                    card.style.display = "";
                    listItem.style.display = "";
                    cardsSearchedItemsCounter++;
                }
                else {
                    listItem.style.display = "none";
                }
            })
            if (!cardsSearchedItemsCounter) {
                card.style.display = "none";
            }
        }
    });
}