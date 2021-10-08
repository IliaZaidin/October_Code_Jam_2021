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
        if (cardValue.indexOf(inclusiveSearchValue) > -1) { //if card is found within search
            card.style.display = ""; //show the card
            cardListItems.forEach(listItem => { //show all of it's items
                listItem.style.display = "";
            })
        }
        else { 
            cardListItems.forEach(listItem => {
                const itemValue = listItem.textContent.toUpperCase();
                if (itemValue.indexOf(inclusiveSearchValue) > -1) { //if an item within a card is found
                    card.style.display = ""; //show the card
                    listItem.style.display = ""; //show the item
                    cardsSearchedItemsCounter++; //for a later condition
                }
                else {
                    listItem.style.display = "none"; //if the item is not found within the card hide it
                }
            })
            if (!cardsSearchedItemsCounter) { //if there isn't a single item found within the card
                card.style.display = "none"; //hide the card
            }
        }
    });
}