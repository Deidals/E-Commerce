const menuButton = document.querySelector(`#menuButton`);
const closeButton = document.querySelector(`#closeButton`);
const blurEffect = document.querySelector(`aside`);


const minusSign = document.querySelector(`#minusSign`);
const plusSign = document.querySelector(`#plusSign`);
const addToCartButton = document.querySelector(`#addToCartButton`)

let amountToCartElement = document.querySelector(`#amountToCart`);
let amountToCart = Number(amountToCartElement.textContent);


let list = document.querySelector(`#imageContainer ul`);
const items  = document.querySelectorAll(`#imageContainer ul li`);
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentIndex = 0;
let lengthItems = items.length - 1;


const cartButton = document.querySelector(`header button`);
let cartAmount = document.querySelector(`#cartAmount`);

const CartThirdChild = document.querySelector(`#CartThirdChild`);
const Checkout = document.querySelector(`#Checkout`);
const CartSecondChild = document.querySelector(`#CartSecondChild`);
const deleteButton = document.querySelector(`#deleteButton`);


menuButton.addEventListener(`click`, () => {
    document.querySelector(`nav`).classList.toggle(`active`);
    blurEffect.style.display = `block`;
});

closeButton.addEventListener(`click`, () => {
    document.querySelector(`nav`).classList.toggle(`active`);
    blurEffect.style.display = `none`;
});


minusSign.addEventListener(`click`, () => {
    if (amountToCart > 0) {
        amountToCart -= 1;
        amountToCartElement.textContent = amountToCart;
    }
});

plusSign.addEventListener(`click`, () => {
    if (amountToCart < 10) {
        amountToCart += 1;
        amountToCartElement.textContent = amountToCart;
    }
});


nextButton.onclick = function(){
    if(currentIndex + 1 > lengthItems){
        currentIndex = 0;
    }else{
        currentIndex += 1;
    }
    reloadslider();
}

prevButton.onclick = function(){
    if(currentIndex - 1 < 0){
        currentIndex = lengthItems;
    }else{
        currentIndex -= 1;
    }
    reloadslider();
}

function reloadslider(){
    let checkLeft = items[currentIndex].offsetLeft;
    list.style.left = -checkLeft + `px`;
}


cartButton.addEventListener(`click`, () => {
    document.querySelector(`#cartStatus`).classList.toggle(`active`);
});


addToCartButton.addEventListener(`click`, () =>{
    cartAmount.innerHTML = amountToCart;
    document.querySelector(`#times`).innerHTML = amountToCart;
    document.querySelector(`#result`).innerHTML = `$${amountToCart * 125}`;
    if(Number(cartAmount.innerHTML) !== 0){
    cartAmount.style.visibility = `visible`;
    CartSecondChild.style.visibility = `hidden`;
    CartThirdChild.style.visibility = `visible`;
    Checkout.style.visibility = `visible`
}else{
    cartAmount.style.visibility = `hidden`;
}
});

deleteButton.addEventListener(`click`, () => {
    CartThirdChild.style.visibility = `hidden`;
    Checkout.style.visibility = `hidden`;
    CartSecondChild.style.visibility= `visible`;
    cartAmount.innerHTML = `0`
    cartAmount.style.visibility = `hidden`
});