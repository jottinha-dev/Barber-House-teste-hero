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

ScrollReveal(). reveal ( ".titulo-conteudo", {
    ...scrollRevealOption,
    delay: 800,
});

ScrollReveal(). reveal ( ".imagem-equipe", {
    ...scrollRevealOption,
    delay: 100,
});

ScrollReveal(). reveal ( ".descricao", {
    ...scrollRevealOption,
    delay: 900,
});

ScrollReveal(). reveal ( ".botao-agenda", {
    ...scrollRevealOption,
    delay: 1000,
});

    /*SEÇÃO SERVIÇOS */

ScrollReveal(). reveal ( ".titulo-section", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 400,
});


ScrollReveal(). reveal ( ".imagem", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 400,
});

ScrollReveal(). reveal ( ".botao", {
    ...scrollRevealOption,
    delay: 1400,
    interval: 400,
});

ScrollReveal(). reveal ( ".nome-corte", {
    ...scrollRevealOption,
    delay: 1200,
    interval: 300,
});

ScrollReveal(). reveal ( ".rodape", {
    ...scrollRevealOption,
    delay: 1300,
    interval: 400,
});

ScrollReveal(). reveal ( ".linha", {
    ...scrollRevealOption,
    delay: 1300,
    interval: 400,
});

/* FIM DA SEÇÃO SERVIÇOS */


/* SWAPPER AVALIAÇOES */

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCrusor: true,
  spaceBetWeen: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //responsivite breakpoints
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
  },

});

ScrollReveal(). reveal ( ".slider-wrapper", {
    ...scrollRevealOption,
    delay: 1200,
    interval: 400,
});

ScrollReveal(). reveal ( ".titulo-avaliacoes", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 400,
});

/* SWAPPER AVALIAÇOES */




