const menuBtn =document.getElementById("menu-btn");
const navLinks =document.getElementById("nav-links");
const menuBtnIcon =menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    
    const isopen =navLinks.classList.contains ("open");
    menuBtnIcon.setAttribute("class", isopen?"ri-close-line":"ri-menu-3-line");
});

navLinks.addEventListener("click" , () => {
    navLinks.classList.remove ("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration: 2000,
};

ScrollReveal(). reveal ( ".header__container h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal(). reveal ( ".header__container p", {
    ...scrollRevealOption,
    delay: 1200,
});

ScrollReveal(). reveal ( ".header__btn", {
    ...scrollRevealOption,
    delay: 1400,
});

ScrollReveal(). reveal ( ".socials li", {
    ...scrollRevealOption,
    delay: 2000,
    interval: 300,
});

