const menuHeader = document.querySelector('.menu')
const shopIcon = document.querySelector('#shop-icon')
const burguerMenu = document.querySelector('#list-menu')
const darkMode = document.querySelector('#dark-mode-logo')
const containerHeader = document.querySelector('.header-wrapper')
let scrollPosition = 0
let flag = false

function scrollEvent(sp){
    if(sp >= 600) {
        menuHeader.classList.add('fixed')
        containerHeader.style.padding = 0
        menuHeader.style.backgroundColor = 'black';
    }
    if(sp <= 150 && flag) {
        menuHeader.classList.remove('fixed')
        menuHeader.style.backgroundColor = 'transparent';
    }
}

window.addEventListener('scroll', function(e){
    scrollPosition = window.scrollY
    if(!flag){
        this.window.requestAnimationFrame(function(){
            scrollEvent(scrollPosition)
            flag = false
        })
    }
    flag = true
})

export { scrollEvent }