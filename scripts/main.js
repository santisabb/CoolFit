const menuHeader = document.querySelector('.menu')
const containerHeader = document.querySelector('.header-wrapper')
let scrollPosition = 0
let flag = false

function scrollEvent(sp){
    if(sp > 600) {
        containerHeader.style.padding = 0
        menuHeader.style.position =  'fixed'
        menuHeader.style.zIndex = 1
        menuHeader.style.backgroundColor = 'white'
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