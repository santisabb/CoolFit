const darkButton = document.querySelector('#dark-mode-logo')
const bodyWrapper = document.querySelector('.body-wrapper')
const card = document.querySelector('.card')


darkButton.addEventListener('click', darkMain)

export function darkMain(){
    bodyWrapper.classList.toggle('dark-mode')
}

export function darkCard(){
    card.classList.toggle('dark-mode')
}