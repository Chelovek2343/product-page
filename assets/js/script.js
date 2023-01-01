const cart = document.querySelector('.cart__img');
const cartInfo = document.querySelector('.cart__inner');
const mainImg = document.getElementById('mainImg');
const modal = document.querySelector('.modal');
const closeButton = document.getElementById('close');
const addToCartButton = document.getElementById('addToCart');
const cartInner = document.querySelector('.cart__inner');
const cartWrapper = document.querySelector('.cart__wrapper');
const checkoutButton = document.querySelector('.product__button');
const amount = document.querySelector('.amount');
let i = 1;
amount.textContent = i;
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const cartText = document.querySelector('.cart__text');
const cartImg = document.querySelector('.cart__img');

const cartProduct = document.createElement('div');

increaseCount();
decreaseCount();

cart.addEventListener('click', () => {
    cartInfo.classList.toggle('active');
});

mainImg.addEventListener('click', () => {
    modal.classList.add('active');

    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
    });
});

// Lightbox
const modalPrevButton = document.getElementById('modalPrev');
const modalNextButton = document.getElementById('modalNext');

function next() {
    const currentImg = document.querySelector('.modalImg.imgActive');
    const nextImg = currentImg.nextElementSibling;

    const currentThumb = document.querySelector('.thumbImg.thumbImgActive');
    const nextThumb = currentThumb.nextElementSibling;

    if (nextImg) {
        currentImg.classList.remove('imgActive');
        nextImg.classList.add('imgActive');

        currentThumb.classList.remove('thumbImgActive');
        nextThumb.classList.add('thumbImgActive');
    }
}

modalNextButton.addEventListener('click', next);

function prev() {
    const currentImg = document.querySelector('.modalImg.imgActive');
    const nextImg = currentImg.previousElementSibling;

    const currentThumb = document.querySelector('.thumbImg.thumbImgActive');
    const nextThumb = currentThumb.previousElementSibling;

    if (nextImg) {
        currentImg.classList.remove('imgActive');
        nextImg.classList.add('imgActive');

        currentThumb.classList.remove('thumbImgActive');
        nextThumb.classList.add('thumbImgActive');
    }
}

modalPrevButton.addEventListener('click', prev);

const imgThumb1 = document.getElementById('thumb1');
const imgThumb2 = document.getElementById('thumb2');
const imgThumb3 = document.getElementById('thumb3');
const imgThumb4 = document.getElementById('thumb4');

imgThumb1.addEventListener('click', () => {
    mainImg.innerHTML = `<img src="assets/img/image-product-1.jpg">`;
    imgThumb1.classList.add('active');
    imgThumb2.classList.remove('active');
    imgThumb3.classList.remove('active');
    imgThumb4.classList.remove('active');
});

imgThumb2.addEventListener('click', () => {
    mainImg.innerHTML = `<img src="assets/img/image-product-2.jpg">`;
    imgThumb1.classList.remove('active');
    imgThumb2.classList.add('active');
    imgThumb3.classList.remove('active');
    imgThumb4.classList.remove('active');
});

imgThumb3.addEventListener('click', () => {
    mainImg.innerHTML = `<img src="assets/img/image-product-3.jpg">`;
    imgThumb1.classList.remove('active');
    imgThumb2.classList.remove('active');
    imgThumb3.classList.add('active');
    imgThumb4.classList.remove('active');
});

imgThumb4.addEventListener('click', () => {
    mainImg.innerHTML = `<img src="assets/img/image-product-4.jpg">`;
    imgThumb1.classList.remove('active');
    imgThumb2.classList.remove('active');
    imgThumb3.classList.remove('active');
    imgThumb4.classList.add('active');
});

addToCartButton.addEventListener('click', addItemToCart);

function addItemToCart() {
    const total = 125 * amount.textContent;


    cartProduct.className = 'cart__product';
    cartProduct.innerHTML = `   <div class="product__img">
                        <img src="assets/img/image-product-2-thumbnail.jpg" alt="">
                    </div>
                    <div class="product__info">
                        <div class="product__title">
                            <p>Fall Limited Edition Sneakers</p>
                        </div>
                        <div class="product__price">
                            <p id="price">$125.00 x</p>
                            <p id="product__count">${amount.textContent}</p>
                            <p id="product__total"><b>$${total}.00</b></p>
                        </div>
                    </div>
                    <div id="deletButton">
                        <img src="assets/img/icon-delete.svg" alt="">
                    </div>
             `;

    checkoutButton.style.display = 'block';
    cartText.style.display = 'none';

    cartWrapper.appendChild(cartProduct);

    const deleteButton = cartProduct.querySelector('#deletButton');
    deleteButton.addEventListener('click', deleteItemInCart);

    Number(cartImg.dataset.count = amount.textContent);
}

function increaseCount() {
    plusButton.addEventListener('click', () => {
        amount.textContent = i++;
    });
}

function decreaseCount() {
    minusButton.addEventListener('click', () => {
        amount.textContent = i--;
    });

    if(amount.textContent <= '0'){
        amount.textContent = '1';
    }
}

function deleteItemInCart() {
    cartWrapper.removeChild(cartProduct);
    checkoutButton.style.display = 'none';
    cartText.style.display = 'block';
    Number(cartImg.dataset.count = 0);
}