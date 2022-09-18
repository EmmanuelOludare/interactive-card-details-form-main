//!INITIALIZATION OF VARIABLES
let cardHolderNameInput = document.querySelector('#cardholder-name');
let cardHolderNameCard  = document.querySelector('.cardholder-name-card');
let cardNumberInput = document.querySelector('#card-number');
let cardNumberCard = document.querySelector('.card-number-card');

//?CARDHOLDER NAME
cardHolderNameInput.addEventListener('keyup',()=>{
    cardHolderNameCard.innerHTML = cardHolderNameInput.value;
});

//?CARD NUMBER
cardNumberInput.addEventListener('keyup',()=>{
    cardNumberCard.innerHTML = cardNumberInput.value;
});