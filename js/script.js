function showMenu() {
  const navMenu = document.getElementById('nav-menu')
  const navToggle = document.getElementById('nav-toggle')
  const navClose = document.getElementById('nav-close')

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }

  if(navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  }
}

showMenu()

function removeMenuMobile() {
  const navLink = document.querySelectorAll('.nav__link')

  function linkAction(){
      const navMenu = document.getElementById('nav-menu')
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove('show-menu')
  }
  navLink.forEach((n) => n.addEventListener('click', linkAction))
}

removeMenuMobile()

function changeBackgroundHeader() {
  function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll', scrollHeader)
}

changeBackgroundHeader()

function initializeSwiper() {
  var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

initializeSwiper()