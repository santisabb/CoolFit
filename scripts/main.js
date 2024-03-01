const menuHeader = document.querySelector('.menu')
const containerHeader = document.querySelector('.header-wrapper')
let scrollPosition = 0
let flag = false

function scrollEvent(sp){
    if(sp >= 600) {
        menuHeader.classList.add('fixed')
        containerHeader.style.padding = 0
    }
    if(sp <= 150 && flag) {
        menuHeader.classList.remove('fixed')
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