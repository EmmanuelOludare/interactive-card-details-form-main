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
let flipCard = document.querySelector(".input-complete-state");


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

    let validations = {
        cardHolderNameValidation: false,
        cardNumberValidation: false,
        expiryDateMonthValidation: false,
        expiryDateYearValidation: false,
        cvcNumberValidation: false
    };

    if (cardHolderNameInput.value == "") {
        cardholderNameError.innerHTML = "Can't be blank";
        validations.cardHolderNameValidation = false;
        cardHolderNameInput.classList.add('error-alert');
    } else if (!isNaN(cardHolderNameInput.value)) {
        cardholderNameError.innerHTML = "Wrong format";
        validations.cardHolderNameValidation = false;
        cardHolderNameInput.classList.add('error-alert');
    } else {
        cardholderNameError.innerHTML = " ";
        validations.cardHolderNameValidation = true;
        cardHolderNameInput.classList.remove('error-alert');
    };

    var array = cardNumberInput.value.split(" ").join("");
    let num = parseInt(array);
    if (cardNumberInput.value == "") {
        cardNumberError.innerHTML = "Can't be blank";
        validations.cardNumberValidation = false;
        cardNumberInput.classList.add('error-alert');
    } else if (isNaN(num)) {
        cardNumberError.innerHTML = "Wrong format, numbers only";
        validations.cardNumberValidation = false;
        cardNumberInput.classList.add('error-alert');
    } else if (num.length < 16) {
        cardNumberError.innerHTML = "Invalid number of characters";
        validations.cardNumberValidation = false;
        cardNumberInput.classList.add('error-alert');
    } else {
        cardNumberError.innerHTML = " "
        validations.cardNumberValidation = true;
        cardNumberInput.classList.remove('error-alert');
    };

    if (expiryDateMonthInput.value == "") {
        expiryDateError.innerHTML = "Can't be blank";
        validations.expiryDateMonthValidation = false;
        expiryDateMonthInput.classList.add('error-alert');
    } else if (isNaN(expiryDateMonthInput.value)) {
        expiryDateError.innerHTML = "Wrong format, numbers only";
        validations.expiryDateMonthValidation = false;
        expiryDateMonthInput.classList.add('error-alert');
    } else if (expiryDateMonthInput.value.length < 2) {
        expiryDateError.innerHTML = "Invalid number of characters";
        validations.expiryDateMonthValidation = false;
        expiryDateMonthInput.classList.add('error-alert');
    } else {
        expiryDateError.innerHTML = " ";
        validations.expiryDateMonthValidation = true;
        expiryDateMonthInput.classList.remove('error-alert');
    };



    if (expiryDateYearInput.value == "") {
        expiryDateError.innerHTML = "Can't be blank";
        validations.expiryDateYearValidation = false;
        expiryDateYearInput.classList.add('error-alert');
    } else if (isNaN(expiryDateYearInput.value)) {
        expiryDateError.innerHTML = "Wrong format, numbers only";
        validations.expiryDateYearValidation = false;
        expiryDateYearInput.classList.add('error-alert');
    } else if (expiryDateYearInput.value.length < 2) {
        expiryDateError.innerHTML = "Invalid number of characters";
        validations.expiryDateYearValidation = false;
        expiryDateYearInput.classList.add('error-alert');
    } else {
        expiryDateError.innerHTML = " ";
        validations.expiryDateYearValidation = true;
        expiryDateYearInput.classList.remove('error-alert');
    };

    if (cvcNumberInput.value == "") {
        cvcNumberError.innerHTML = "Can't be blank";
        validations.cvcNumberValidation = false;
        cvcNumberInput.classList.add('error-alert');
    } else if (isNaN(cvcNumberInput.value)) {
        cvcNumberError.innerHTML = "Wrong format, numbers only";
        validations.cvcNumberValidation = false;
        cvcNumberInput.classList.add('error-alert');
    } else if (cvcNumberInput.value.length < 3) {
        cvcNumberError.innerHTML = "Invalid number of characters";
        validations.cvcNumberValidation = false;
        cvcNumberInput.classList.add('error-alert');
    } else {
        cvcNumberError.innerHTML = " ";
        validations.cvcNumberValidation = true;
        cvcNumberInput.classList.remove('error-alert');
    };

    if (validations.cardHolderNameValidation && validations.cardNumberValidation && validations.expiryDateMonthValidation && validations.expiryDateYearValidation && validations.cvcNumberValidation) {
        flipCard.style.transform = 'rotateY(180deg)';
    } else {
        flipCard.style.transform = 'rotateY(0deg)';
    }
});