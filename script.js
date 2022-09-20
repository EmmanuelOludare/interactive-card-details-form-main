//!INITIALIZATION OF VARIABLES
let cardHolderNameInput = document.querySelector('#cardholder-name');
let cardHolderNameCard = document.querySelector('.cardholder-name-card');
let cardNumberInput = document.querySelector('#card-number');
let cardNumberCard = document.querySelector('.card-number-card');
let expiryDateInput = document.querySelector("#expiry-date")

//?CARDHOLDER NAME
cardHolderNameInput.addEventListener('keyup', () => {
    cardHolderNameCard.innerHTML = cardHolderNameInput.value;
});

//?CARD NUMBER
cardNumberInput.addEventListener('keyup', () => {
    cardNumberCard.innerHTML = cardNumberInput.value;
    console.log(cardNumberInput.value.length)
    if (cardNumberInput.value.length == 4) {
        cardNumberInput.value = cardNumberInput.value + " ";
    } else if (cardNumberInput.value.length == 9) {
        cardNumberInput.value = cardNumberInput.value + " ";
    } else if (cardNumberInput.value.length == 14) {
        cardNumberInput.value = cardNumberInput.value + " ";
    } else {
        cardNumberInput.value = cardNumberInput.value
    }
});

//?EXPIRY DATE
expiryDateInput.addEventListener('keyup', () => {
    console.log(expiryDateInput.value)
});