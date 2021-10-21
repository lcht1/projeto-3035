const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeader() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const buttonBack = document.querySelector('.back-to-top')
function backToTop() {
    if (window.scrollY >= 560) {
        buttonBack.classList.add('show')
    } else {
        buttonBack.classList.remove('show')

    }
}

window.addEventListener('scroll', () => {
    backToTop(), changeHeader()
})