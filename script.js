const menuOpen = document.querySelector(".menu-open")
const menuClose = document.querySelector(".menu-close")
menuClose.addEventListener("click", closeMenu)
function closeMenu() {
    navbar.classList.remove("showmenu")
    navContainer.classList.remove("showmenu")
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
}
const navbar = document.querySelector(".navbar")
const navContainer = document.querySelector(".nav-container")
console.log(menuOpen, navContainer)
function showMenu() {
    navbar.classList.add("showmenu")
    navContainer.classList.add("showmenu")
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
}
menuOpen.addEventListener("click", showMenu)

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
    grabCursor: true,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});
