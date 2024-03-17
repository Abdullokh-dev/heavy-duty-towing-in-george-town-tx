const mobile_menu = document.querySelector('.mobile-menu');
const site_overlay = document.querySelector('.site-overlay');
const header_burger = document.getElementById('burger');
const mobile_close_btn = document.querySelectorAll('.js-menu-close');

function openOverlay() {
  site_overlay.style.width = '100%';
  site_overlay.style.opacity = '1';
}

function closeOverlay() {
  site_overlay.style.width = '0';
  site_overlay.style.opacity = '0';
}

function openMobileMenu() {
  mobile_menu.style.right = '0'
  openOverlay()
}

function closeMobileMenu() {
  mobile_menu.style.right = '-375px';
  closeOverlay()
}

if (header_burger && mobile_close_btn && site_overlay) {
  header_burger.addEventListener('click', () => openMobileMenu());

  mobile_close_btn.forEach((btn) => {
    btn.addEventListener('click', () => {closeMobileMenu()})
  })

  site_overlay.addEventListener('click', () => closeMobileMenu());
} else {
  console.log('not working');
}

$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    adaptiveHeight: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    easing: 'ease',
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    touchThreshold: 10,
    appendArrows: $('.slider__arrows'),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});