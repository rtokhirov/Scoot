const toggleBtn = document.querySelector(".header__nav-btn");
const btnImg = document.querySelector(".burger-btn")
const nav = document.querySelector("nav");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("hidden");


    if (nav.classList.contains('hidden')) {
        btnImg.src = '../images/svg/header-burger.svg'
        nav.style.display = "none"
    } else {
        btnImg.src = '../images/svg/header-close.svg'
        nav.style.display = "flex"
    }
});