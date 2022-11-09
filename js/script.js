window.addEventListener('DOMContentLoaded', ()=>{
// Loader
const loader = document.querySelector('.loader')

setTimeout(()=>{
    loader.style.opacity='0'

    setTimeout(()=>{
        loader.style.display= 'none'
    }, 500)
}, 2000)

// Toggle
const header = document.querySelector('.header')
const toggle = document.querySelector('.toggle')


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

// Timer

const deadline = '2023-07-25'

function getTimeRemaining (endtime){
    let days, hours, minutes, seconds
    const timer = Date.parse(endtime)-Date.parse(new Date())
    if(timer<=0){
        days = 0
        hours = 0
        seconds = 0 
        minutes = 0
    }else{
        days = Math.floor(timer/(1000*60*60*24))
        hours = Math.floor((timer/(1000*60*60))%24)
        minutes = Math.floor((timer/(1000*60))%60)
        seconds = Math.floor((timer/(1000))%60)
    }
    
        return{
            timer:timer,
            days:days,
            hours:hours,
            minutes:minutes,
            seconds:seconds
        }
}

function getZero(num){
    if(num>=0 && num<10){
        return `0${num}`
    }else{
        return num
    }
}

function setclock (selector, endtime){
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds')
        timerinterval = setInterval(uptadeclock, 1000)
        uptadeclock()
    function uptadeclock(){
        t = getTimeRemaining(endtime)
        days.innerHTML = getZero(t.days)
        hours.innerHTML = getZero(t.hours)
        minutes.innerHTML = getZero(t.minutes)
        seconds.innerHTML = getZero(t.seconds)
        if(t.timer<=0){
            clearTimeout(timerinterval)
        }
    }
}

setclock('.timer', deadline)

// // Modal

// const modalShow = document.querySelector('[data-show]'),
//     modalCloseBtn = document.querySelector('[data-close]'),
//     modal = document.querySelector('.modal')

//     function modalClose(){
//         modal.classList.add('hide')
//         modal.classList.remove('show')
//         modal.style.overflow =''
//     }

//     modalShow.addEventListener('click', ()=>{
//         modal.classList.add('show')
//         modal.classList.remove('hide')
//         // modal.style.overflow = 'hidden'
//     })

//     modalCloseBtn.addEventListener((click), ()=>{
//         modalClose()
//     })

    // Class

    class MenuCard {
        constructor(title, about, parentselector){
            this.title = title,
            this.about = about,
            this.parent = document.querySelector(parentselector)
        }

        render(){
            const element = document.createElement('div')
            element.innerHTML = `
            <div class="main__card__text__about">
                 <h3>${this.title}</h3>
                 <p >${this.about}</p>
            </div>
        `
        this.parent.append(element)
        }
    }

    new MenuCard(
        "Invest Any Amount",
        "Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.",
        ".main__card__text"
        ).render()
    
        new MenuCard(
            "Build a Balanced Portfolio",
            "Customize your portfolio with pieces of different companies and funds to help reduce risk.",
            ".main__card__text"
            ).render()
        
        new MenuCard(
            "Trade in Real Time",
            "Trades placed during market hours are executed at that time, so you’ll always know the share price.",
            ".main__card__text"
            ).render()

})
