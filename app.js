// import functions

// reference needed DOM elements
const catImage = document.getElementById('cat-image');
const catSound = document.getElementById('cat-sound');
const dogImage = document.getElementById('dog-image');
const dogSound = document.getElementById('dog-sound');
const horseImage = document.getElementById('horse-image');
const horseSound = document.getElementById('horse-sound');
console.log(horseSound);
// set event listeners
catImage.addEventListener('click', () => {
    catSound.play();
});

dogImage.addEventListener('click', () => {
    dogSound.play();
});

horseImage.addEventListener('click', () => {
    horseSound.play();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        catSound.play();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        dogSound.play();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'h') {
        horseSound.play();
    }
});

    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
