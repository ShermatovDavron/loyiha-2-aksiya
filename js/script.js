'use strict'
// Toggle
const navbar = document.querySelector('nav')
const toggle = document.querySelector(".toggle")

toggle.addEventListener('click', ()=>{
    if(toggle.classList.contains('toggle')){
        toggle.classList.add('toggle_transform')
        toggle.classList.remove('toggle')
    }else{
        toggle.classList.add('toggle')
        toggle.classList.remove('toggle_transform') 
    }
    const ul = document.createElement('ul')
    ul.classList.add('navbar__item__list__toggle')
    navbar.append(ul)
    ul.innerHTML = `<li><a href="#">Products <img src="./img/Vector.svg" alt=""></a> </li>
    <li><a href="#"> Learn <img src="./img/Vector.svg" alt=""></a></li>
    <li><a href="#">Support</a> </li>
    <li><a href="#">Who we are <img src="./img/Vector.svg" alt=""></a> </li>`
})

