import { scrollEvent } from "./headerScrollEvent.js"
import { darkMain } from "./darkMode.js"
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const menu = document.querySelector('.nav-bar')

openMenu.addEventListener('click', ()=>{
    menu.classList.add('visible')
})
closeMenu.addEventListener('click', ()=>{
    menu.classList.remove('visible')
})
scrollEvent()
darkMain()
