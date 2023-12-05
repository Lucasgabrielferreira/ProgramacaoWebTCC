document.addEventListener('DOMContentLoaded', () => {
   const menu = document.querySelector('.menu');
   const NavMenu = document.querySelector('.nav-menu');

   menu.addEventListener('click', () => {
      menu.classList.toggle('ativo');
      NavMenu.classList.toggle('ativo');
   });

   //Menu Responsivo
   window.sr = ScrollReveal({ reset: true });
   ScrollReveal().reveal('.area-1', {
      origin: 'top',
      distance: '30px',
      duration: 1000,
   });
});



ScrollReveal().reveal('.text-page-h2', {
   origin: 'top',
   distance: '30px',
   duration: 700,
});

ScrollReveal().reveal('.home-text', {
   origin: 'left',
   distance: '30px',
   duration: 1350,
});

ScrollReveal().reveal('.text-h4', {
   origin: 'left',
   distance: '30px',
   duration: 1000,
});

ScrollReveal().reveal('.text-p', {
   origin: 'left',
   distance: '30px',
   duration: 1350,
});

ScrollReveal().reveal('.h2-sobre', {
   origin: 'top',
   distance: '30px',
   duration: 800,
});

ScrollReveal().reveal('.p-sobre_1', {
   origin: 'left',
   distance: '30px',
   duration: 800,
});

ScrollReveal().reveal('.p-sobre_2', {
   origin: 'right',
   distance: '30px',
   duration: 900,
});

ScrollReveal().reveal('#footer_social_media', {
   origin: 'top',
   distance: '30px',
   duration: 800,
})

ScrollReveal().reveal('.footer-list', {
   origin: 'left',
   distance: '30px',
   duration: 1000,
})

ScrollReavel().reavel('.input_group', {
   origin: 'left',
   distance: '30px',
   duration: 1000,
})

ScrollReavel().reavel('.titulo-card', {
   origin: 'left',
   distance: '30px',
   duration: 1000,
})

//2 Animação com Scroll reavel 