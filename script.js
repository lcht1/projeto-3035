const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

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