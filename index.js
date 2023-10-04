// Элементы слайдера
const reviewsUsers = document.querySelector('.reviews-users');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = Array.from(reviewsUsers.querySelectorAll('.slide'));
const slideCount = slides.length;
let slideIndex = 0;

// Обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}

let firstDot = document.querySelector('.dot-first');
let secondDot = document.querySelector('.dot-second');
let thirdDot = document.querySelector('.dot-third');
firstDot.addEventListener('click', function (){
    slides[0].style.display = 'flex'
    slides[1].style.display = 'none'
    slides[2].style.display = 'none'
})
secondDot.addEventListener('click', function (){
    slides[0].style.display = 'none'
    slides[1].style.display = 'flex'
    slides[2].style.display = 'none'
})
thirdDot.addEventListener('click', function (){
    slides[0].style.display = 'none'
    slides[1].style.display = 'none'
    slides[2].style.display = 'flex'
})

// Инициализация слайдера
updateSlider();

//Скролл
function scroll(){
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}
}
scroll()
//Показ и скрытие ответов на вопросы
let faq  = document.getElementsByClassName('faq-page')
let answer = document.querySelectorAll('.faq-body')

for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

//
let burger = document.querySelector('.burger')
let main = document.querySelector('.main')
let desc = document.querySelector('.description')
let about = document.querySelector('.about')
let reviews = document.querySelector('.reviews-back')
let faqBlock = document.querySelector('.faq')
let info = document.querySelector('.info-credits')
let formBlock = document.querySelector('.container-form')
let footer = document.querySelector('footer')
let header = document.querySelector('header')
let burgerPart = document.querySelectorAll('.burger-part')
let back = document.querySelector('.back')
let adaptiveHeader = document.querySelector('.adaptive-header')

burger.addEventListener('click', function (){
    toggle()
    scroll()
})

function dotColor(){
    if(slides[0].style.display === 'flex'){
        firstDot.style.background= '#2A6CEA';
        secondDot.style.background= '#bbb';
        thirdDot.style.background= '#bbb';
    } if(slides[1].style.display === 'flex'){
        firstDot.style.background= '#bbb';
        secondDot.style.background= '#2A6CEA';
        thirdDot.style.background= '#bbb';
    } if(slides[2].style.display === 'flex'){
        firstDot.style.background= '#bbb';
        secondDot.style.background= '#bbb';
        thirdDot.style.background= '#2A6CEA';
    }
}
prevButton.addEventListener('click', dotColor);
nextButton.addEventListener('click', dotColor);

let descAdaptive = document.querySelector('.adaptive-desc')
let aboutAdaptive = document.querySelector('.adaptive-about')
let faqAdaptive = document.querySelector('.adaptive-faq')
let formAdaptive = document.querySelector('.adaptive-form')

descAdaptive.addEventListener('click', function (){
    toggle()
})
aboutAdaptive.addEventListener('click', function (){
    toggle()
})
faqAdaptive.addEventListener('click', function (){
    toggle()
})
formAdaptive.addEventListener('click', function (){
    toggle()
})

function toggle() {
    main.classList.toggle("none-display");
    desc.classList.toggle("none-display");
    about.classList.toggle("none-display");
    reviews.classList.toggle("none-display");
    faqBlock.classList.toggle("none-display");
    info.classList.toggle("none-display");
    formBlock.classList.toggle("none-display");
    footer.classList.toggle("none-display");
    header.classList.toggle("flex-display");
    back.classList.toggle("none-background");
    adaptiveHeader.classList.toggle("flex-display");
    for (let i = 0; i <= burgerPart.length - 1; i++) {
        burgerPart[i].classList.toggle("black-background");
    }
}