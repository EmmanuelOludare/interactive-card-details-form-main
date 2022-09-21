//!INITIALIZATION OF VARIABLES
let cardHolderNameInput = document.querySelector('#cardholder-name');
let cardHolderNameCard = document.querySelector('.cardholder-name-card');
let cardNumberInput = document.querySelector('#card-number');
let cardNumberCard = document.querySelector('.card-number-card');
let expiryDateMonthInput = document.querySelector(".expiry-date-month");
let expiryDateMonthCard = document.querySelector(".month");
let expiryDateYearInput = document.querySelector(".expiry-date-year");
let expiryDateYearCard = document.querySelector(".year");
let cvcNumberInput = document.querySelector("#cvc-number");
let cvcNumberCard = document.querySelector(".cvc-number-card")

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

//?EXPIRY DATE MONTH
expiryDateMonthInput.addEventListener('keyup', () => {
    expiryDateMonthCard.innerHTML = expiryDateMonthInput.value;
});

//?EXPIRY DATE YEAR
expiryDateYearInput.addEventListener('keyup', () => {
    expiryDateYearCard.innerHTML = expiryDateYearInput.value;
});

//?CVC NUMBER
cvcNumberInput.addEventListener('keyup', () => {
    cvcNumberCard.innerHTML = cvcNumberInput.value;
});