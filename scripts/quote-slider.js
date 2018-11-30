const mySlider = document.querySelector('#mySlider'); // slides container
const quoteSlides = document.querySelectorAll('.slide'); // array of each slide
let curIndex = 1;

// arrows 
const arrowLeft = document.querySelector('#arrowLeft');
const arrowRight = document.querySelector('#arrowRight');

// changing buttons
const myButtons = document.querySelectorAll('.stage-btns button');
let curButton = 0;

// events to arrows (right to go forward, left to go back)
arrowRight.addEventListener('click', () => {
    mySlider.classList.add('go-forward');
    setTimeout('firstToTheEnd()', 800);
});

arrowLeft.addEventListener('click', () => {
    mySlider.classList.add('go-back');
    setTimeout('lastToTheBegin()', 800);
});

// moving first element to last position while going slide forward
function firstToTheEnd() {
    let firstSlider; // variable stores first slider
    if (curIndex === 0) firstSlider = quoteSlides[quoteSlides.length - 1];
    else firstSlider = quoteSlides[curIndex - 1];

    // moving first slide to the end and removing the "left: -200%" class of the container
    mySlider.appendChild(firstSlider);
    mySlider.classList.remove('go-forward');

    // increment the current index 
    curIndex++;
    if (curIndex > (quoteSlides.length - 1)) curIndex = 0;

    // setting current button number due to current Index
    if(curIndex > 0){
        curButton = curIndex - 1;
        // if current button = 0 we have to go to the last element 
        if(curButton > 0){ 
            myButtons[curButton - 1].classList.remove('active-btn');
            myButtons[curButton].classList.add('active-btn');
        } else{
            myButtons[myButtons.length - 1].classList.remove('active-btn');
            myButtons[0].classList.add('active-btn');
        }        
    } else{
        curButton = myButtons.length - 1;
        myButtons[curButton - 1].classList.remove('active-btn');
        myButtons[curButton].classList.add('active-btn');
    }
}

// moving last element to begin position while going slide back
function lastToTheBegin() {
    let lastSlider; // variable stores last slider
    if (curIndex === (quoteSlides.length - 1)) lastSlider = quoteSlides[0];
    else lastSlider = quoteSlides[curIndex + 1];

    // moving last slide to begin and removing the "left: 0" class of the container
    if (curIndex === 0) mySlider.insertBefore(lastSlider, quoteSlides[quoteSlides.length - 1]);
    else mySlider.insertBefore(lastSlider, quoteSlides[curIndex - 1]);
    mySlider.classList.remove('go-back');

    curButton--;
    if(curButton < 0){
        curButton = (myButtons.length - 1);
        myButtons[0].classList.remove('active-btn');
        myButtons[curButton].classList.add('active-btn');
    } else{
        myButtons[curButton + 1].classList.remove('active-btn');
        myButtons[curButton].classList.add('active-btn');
    }

    // decrement the current index 
    curIndex--;
    if (curIndex < 0) {
        curIndex = 2;
    }
}

