// functions to do after loading the DOM
document.addEventListener('DOMContentLoaded', function () {
    typeWriter();
});

/* --- DECLARED FUNCTIONS AREA --- */

// typing animation the 'welcome' word
const txtElements = document.querySelectorAll('.banner hgroup h1');
const words = ['Welcome!', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'];
let currentPosition = 0;
let myIndex = 0;
const delayTime = [300, 90];

function typeWriter() {
    let visibleWord = words[myIndex].substring(0, currentPosition);
    txtElements[myIndex].textContent = visibleWord;

    if (currentPosition < words[myIndex].length) {
        currentPosition++;
        setTimeout("typeWriter()", delayTime[myIndex]);
    } else {
        txtElements[myIndex].classList.remove('typing');
        if(myIndex < words.length - 1){
            myIndex++;
            txtElements[myIndex].classList.add('typing');
            currentPosition = 0;
            setTimeout("typeWriter()", 400);
        }
    }
}