const otherMenu = document.querySelector('#other-menu')
let scrollPosition = 0
let flag = false



export function otherScrollEvent(sp){
    if(sp >= 100) {
        otherMenu.classList.add('fixed')
    }
    if(sp <= 50 && flag) {
        otherMenu.classList.remove('fixed')
    }
}

window.addEventListener('scroll', function(){
    scrollPosition = window.scrollY
    if(!flag){
        this.window.requestAnimationFrame(function(){
            otherScrollEvent(scrollPosition)
            flag = false
        })
    }
    flag = true
})