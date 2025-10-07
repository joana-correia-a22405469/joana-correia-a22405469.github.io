//--------------------------------------------------
// get elements
const cat = document.getElementById('cat');
const counterDisplay = document.getElementById('counter');
const catMessage = document.getElementById('cat-message');
const fish = document.getElementById('fish');
const infoBox = document.getElementById('info-box');
const infoText = document.getElementById('info-text');

//--------------------------------------------------
// click –> pet the cat
let petCount = 0;
cat.addEventListener('click', (e) => {
    petCount++;
    counterDisplay.textContent = `you've pet salem ${petCount} time${petCount !== 1 ? 's' : ''}!`;

    // floating hearts
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.classList.add('heart');

        const offsetX = Math.random() * 60 - 30;
        const offsetY = Math.random() * 20 - 10;

        heart.style.left = `${e.offsetX + offsetX}px`;
        heart.style.top = `${e.offsetY + offsetY}px`;

        cat.parentElement.appendChild(heart);
        setTimeout(() => heart.remove(), 2500);
    }
});

//--------------------------------------------------
// dbclick –> shake box
infoBox.addEventListener('dblclick', () => {
    infoBox.classList.add('pulse');
    setTimeout(() => infoBox.classList.remove('pulse'), 500);
});

//--------------------------------------------------
// mouseover –> change info box colors
infoBox.addEventListener('mouseover', () => {
    infoText.textContent = "but she also loves attention!";
});

infoBox.addEventListener('mouseout', () => {
    infoText.textContent = "salem's a bombay cat who loves getting into trouble";
});

//--------------------------------------------------
// mouseout –> when mouse leaves cat
cat.addEventListener('mouseout', () => {
    catMessage.textContent = 'come back!';
    setTimeout(() => catMessage.textContent = '', 2000);
});

//--------------------------------------------------
// move fish with mouse
const followImg = document.createElement('img');
followImg.id = 'follow-img';
followImg.src = 'images/fish.png';
document.body.appendChild(followImg);

//--------------------------------------------------
// feed the cat
fish.addEventListener('dragstart', () => {
    fish.classList.add('dragging');
});

fish.addEventListener('dragend', () => {
    fish.classList.remove('dragging');
});

cat.addEventListener('dragover', (e) => {
    e.preventDefault();
});

cat.addEventListener('drop', () => {
    catMessage.textContent = 'purr 🐟';
    setTimeout(() => catMessage.textContent = '', 2000);
});
