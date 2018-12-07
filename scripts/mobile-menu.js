// --- MOBILE MENU ---

const burgerBtn = document.querySelector('#burgerBtn');
const myNav = document.querySelector('#myNav');

burgerBtn.addEventListener('click', () =>{
    myNav.classList.toggle('active-nav');
});

// --- SMOOTH SCROLL ---

const myHeader = document.querySelector('#header');
const myBanner = document.querySelector('#banner');
const myBlog = document.querySelector('#blog')

function smoothScroll(target, durationTime){
    let startingPosition = window.pageYOffset;
    let targetDiv = document.querySelector(target);
    let targetPosition = targetDiv.getBoundingClientRect().top - (myHeader.getBoundingClientRect().height) + window.scrollY;
    let distance = targetPosition - startingPosition;
    let startTime = null;

    function scrollAnimation(currentTime){
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startingPosition, distance, durationTime);
        window.scrollTo(0, run);

        if(timeElapsed < durationTime) requestAnimationFrame(scrollAnimation);
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(scrollAnimation);
}

const goTopBtn = document.querySelector('#goTop');
const goArticlesBtn = document.querySelector('#goArticles');
const goBlogBtn = document.querySelector('#goBlog');
const goFooterBtn = document.querySelector('#goFooter');

goTopBtn.addEventListener('click', () =>{smoothScroll('#banner', 1000);});
goArticlesBtn.addEventListener('click', () =>{smoothScroll('#mainPart', 1000);});
goBlogBtn.addEventListener('click', () =>{smoothScroll('#blog', 1000);});
goFooterBtn.addEventListener('click', () =>{smoothScroll('#footer', 1000);});