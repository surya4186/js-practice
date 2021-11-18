let filterLinks = document.querySelectorAll('.filter-link');
console.log(filterLinks);

function hideAllCards() {
    let cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        card.style.display = 'none';
    });
}

function showCards(cardType) {
    console.log(cardType);
    cardType = '.' + cardType;
    // console.log(cardType);
    let cardAll = document.querySelectorAll(cardType);
    console.log(cardAll);
    cardAll.forEach(function (cardType) {
        cardType.style.display = 'block';

    });

}
function printMe(filterLink) {
    filterLink.addEventListener('click', function () {
        //get class name
        let currentElement = this,
            filterType = currentElement.classList[1];
        console.log(filterType);
        //hide all cards
        hideAllCards();
        //Show Cards     
           showCards(filterType);
    });
}
filterLinks.forEach(printMe);