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

