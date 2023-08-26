(function(){
    const burgerItem = document.querySelector('.burger')
    const menu = document.querySelector('.header__nuv_burgеr')
    const close = document.querySelector('.header__nav-close')
    const media = document.querySelector('.about__title-whatsapp')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nuv_burgеr_active')
        
    })
    close.addEventListener('click', () => {
        menu.classList.remove('header__nuv_burgеr_active')
    })
}())




const modal = document.getElementById('modal')
var img = document.getElementById('myImg')
var modalImg =  document.getElementById('img01')

img.onclick = function(){
    modal.style.display='block'
    modalImg.src = this.src
    
}

var span = document.getElementsByClassName('close')[0]
span.onclick=function(){
    modal.style.display='none'
}



const header = document.querySelector('.header')
window.onscroll = () =>{
    if(window.pageYOffset>50){
        header.classList.add('header__acitve')
    }
    else{
    header.classList.remove('header__acitve')
    }}
