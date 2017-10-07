const leftCat = document.getElementById('left-cat');
const rightCat = document.getElementById('right-cat');

const leftCatBtn = document.getElementById('left-cat-btn');
const rightCatBtn = document.getElementById('right-cat-btn');

function changeCatImage(catImage) {
    getRandomUrl().then((response) => {
        console.log('Image has changed');
        catImage.src = response.url;
    });
}

function getRandomUrl() {
    return makeServiceRequest();
}

function makeServiceRequest() {
    return fetch('http://thecatapi.com/api/images/get');
}

leftCatBtn.addEventListener('click', () => {
    changeCatImage(rightCat);
});

rightCatBtn.addEventListener('click', () => {
    changeCatImage(leftCat);
});

document.addEventListener('DOMContentLoaded', () => {
    changeCatImage(leftCat);
    changeCatImage(rightCat);
});