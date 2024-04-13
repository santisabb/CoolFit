const otherMenu = document.querySelector('#other-menu')
let scrollPosition = 0
let flag = false



export function otherScrollEvent(sp){
    if(sp >= 200) {
        otherMenu.classList.add('fixed')
        //containerHeader.style.padding = 0
    }
    if(sp <= 100 && flag) {
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