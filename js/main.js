const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {

    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        console.log(activeSlide);
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) {
            newIndex = slides.children.length - 1;
        }

        if (newIndex >= slides.children.length) {
            newIndex = 0;
        }

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

    });
});


let isHamburgerOpen = false;
const hamburgerButton = document.querySelector('[data-hamburger]');
const menuItems = document.querySelector("[menu-items]");
function openHamburger() {
    if (!isHamburgerOpen) {
        isHamburgerOpen = true;
        hamburgerButton.classList.add('active-button');
        menuItems.classList.add('open-hamburger');
    }
    else {
        isHamburgerOpen = false;
        hamburgerButton.classList.remove('active-button');
        menuItems.classList.remove('open-hamburger');
    }
}

const header = document.querySelector("header");
const homeSection = document.querySelector(".hero-section");

const homeSectionOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
const homeSectionObserver = new IntersectionObserver(function (entries, homeSectionObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
        }

        else {
            header.classList.remove('nav-scrolled');
        }
    })
}, homeSectionOptions);

homeSectionObserver.observe(homeSection);



