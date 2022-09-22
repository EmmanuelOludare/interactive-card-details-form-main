//!DECLARATION OF VARIABLES
let cardHolderNameInput = document.querySelector('#cardholder-name');
let cardHolderNameCard = document.querySelector('.cardholder-name-card');
let cardNumberInput = document.querySelector('#card-number');
let cardNumberCard = document.querySelector('.card-number-card');
let expiryDateMonthInput = document.querySelector(".expiry-date-month");
let expiryDateMonthCard = document.querySelector(".month");
let expiryDateYearInput = document.querySelector(".expiry-date-year");
let expiryDateYearCard = document.querySelector(".year");
let cvcNumberInput = document.querySelector("#cvc-number");
let cvcNumberCard = document.querySelector(".cvc-number-card");
let confirmButton = document.querySelector("#confirm-button");
let cardholderNameError = document.querySelector("#cardholder-name-error");
let cardNumberError = document.querySelector("#card-number-error");
let expiryDateError = document.querySelector("#expiry-date-error");
let cvcNumberError = document.querySelector("#cvc-number-error");

//?CARDHOLDER NAME
cardHolderNameInput.addEventListener('keyup', () => {
    cardHolderNameCard.innerHTML = cardHolderNameInput.value;
});

//?CARD NUMBER
cardNumberInput.addEventListener('keyup', () => {
    cardNumberCard.innerHTML = cardNumberInput.value;

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

//?FORM SUSBMISSION
confirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    /*if (cardHolderNameInput.value == "") {
        cardholderNameError.innerHTML = "Can't be blank";
    };*/


    const regex = new RegExp('^[0-9]*$');
    if (cardNumberInput.value == "") {
        cardNumberError.innerHTML = "Can't be blank";
    } else if (regex.test(cardNumberInput.value) && cardNumberInput.value.includes(" ") && !/^[a-zA-Z]+$/.test(cardNumberInput.value)) {
        cardNumberError.innerHTML = " "
    } else {
        cardNumberError.innerHTML = "Wrong format, numbers only"
    };
    /*if (expiryDateMonthInput.value == "" && expiryDateYearInput.value == "") {
        expiryDateError.innerHTML = "Can't be blank";
    };

    if (cvcNumberInput.value == "") {
        cvcNumberError.innerHTML = "Can't be blank";
    };*/

});