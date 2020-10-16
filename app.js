const navMobile = document.querySelector('.nav-mobile')
const hamburger = document.querySelector('.hamburger')
const faBars = document.querySelector('.fa-bars')

hamburger.addEventListener('click', e => {
  navMobile.classList.toggle('nav-change')
  faBars.classList.toggle('fa-times')
})