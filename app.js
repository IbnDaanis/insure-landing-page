const navMobile = document.querySelector('.nav-mobile')
const hamburger = document.querySelector('.hamburger')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')

hamburger.addEventListener('click', e => {
  navMobile.classList.toggle('nav-change')
  document.body.classList.toggle('no-scrolling')
  openMenu.classList.toggle('invisible')
  closeMenu.classList.toggle('invisible')
})