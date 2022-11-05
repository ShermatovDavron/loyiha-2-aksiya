window.addEventListener('DOMContentLoaded', ()=>{
    // Toggle
const header = document.querySelector('.header')
const toggle = document.querySelector(".toggle")

toggle.addEventListener('click', ()=>{
    const ul = document.createElement('ul')
    ul.classList.add('navbar__item__list__toggle')
    if(toggle.classList.contains('toggle')){
        toggle.classList.add('toggle_transform')
        toggle.classList.remove('toggle')
        // list
        header.append(ul)
        ul.innerHTML = `<li><a href="#">Products <img src="./img/Vector.svg" alt=""></a> </li>
        <li><a href="#"> Learn <img src="./img/Vector.svg" alt=""></a></li>
        <li><a href="#">Support</a> </li>
        <li><a href="#">Who we are <img src="./img/Vector.svg" alt=""></a> </li>`
    }else{
        toggle.classList.add('toggle')
        toggle.classList.remove('toggle_transform')
    }
    
})

// Tab

const parentTab = document.querySelector('.buy__items'),
    tabs = document.querySelectorAll('.buy__items__item'),
    tabContent = document.querySelectorAll('.buy__img__content')

function hideTabContent(){
    tabs.forEach((item)=>{
        item.classList.remove('buy__active')
    })
    tabContent.forEach((item)=>{
        item.classList.add('hide')
        item.classList.remove('show')
    })
}   

 function showTabContent(i){
    tabs[i].classList.add('buy__active')
    tabContent[i].classList.add('show')
    tabContent[i].classList.remove('hide')
 }  
 hideTabContent()
 showTabContent(0) 

parentTab.addEventListener('click', (event)=>{
    const target = event.target
    if(target && target.classList.contains('buy__items__item')){
        tabs.forEach((item, idx)=>{
            if(target==item){
                hideTabContent()
                showTabContent(idx)
            }
        })
    }
})





    

})
