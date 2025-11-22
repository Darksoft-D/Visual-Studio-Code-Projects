const coin = document.querySelector('.coin');
const block = document.querySelector('.blockimg');
let position = 0;

function animateCoin() {
    position += 50;
    if (position > 200) {
        position = 0;
    }
    coin.style.backgroundPosition = `-${position}px 0`;
}

block.addEventListener('click', function handler() {
    coin.style.display = 'block';
    coin.classList.add('up');
    setInterval(animateCoin, 100);
    block.removeEventListener('click', handler);
});