// Btn to theme options
let themOption = document.querySelector('.theme-option');
let themBody = document.querySelector('.theme-body');

themOption.addEventListener('click', ()=> {
    themOption.classList.toggle('theme-option-active');
    themBody.classList.toggle('theme-body-active');
})

// Btn Switch to Snicky Nav
let btnIn = document.querySelector('.btn-inside');
let btnBack = document.querySelector('.btn-back');
let btnActive = document.querySelector('.btn-inside-active');
let navBar = document.querySelector('.navigation');
let elmainInform = document.querySelector('.main-inform')

btnBack.addEventListener('click', ()=> {
    btnIn.classList.toggle('btn-inside-active');
    btnBack.classList.toggle('btn-back-active');
    navBar.classList.toggle('navigation-active');
    elmainInform.classList.toggle('mar-top');
})

// Dark Side Sun and Moon Active, Deactive
let darkAc = document.querySelector('.dark-active');
let light = document.querySelector('.light');
let dark = document.querySelector('.dark');
let sun = document.querySelector('.sun-hide');
let topLight = document.querySelector('.top-img-light');
let topDark = document.querySelector('.top-img-dark');
let elBlack = document.querySelector('.dark-active1');
let elSun = document.querySelector('.sun-hide1');


elBlack.addEventListener('click', ()=> {
    document.body.classList.add('dark-active-fonts')
    light.classList.add('light-img-active');
    dark.classList.add('dark-img-active');
    elBlack.classList.add('dark-active-hide');
    elSun.classList.add('sun-active');
    topLight.classList.add('top-img-light-active');
    topDark.classList.add('top-img-dark-active');
})

darkAc.addEventListener('click', ()=> {
    document.body.classList.add('dark-active-fonts')
    light.classList.add('light-img-active');
    dark.classList.add('dark-img-active');
    darkAc.classList.add('dark-active-hide');
    sun.classList.add('sun-active');
    topLight.classList.add('top-img-light-active');
    topDark.classList.add('top-img-dark-active');
})

elSun.addEventListener('click', ()=> {
    document.body.classList.remove('dark-active-fonts')
        light.classList.remove('light-img-active');
        dark.classList.remove('dark-img-active');
        elBlack.classList.remove('dark-active-hide');
        elSun.classList.remove('sun-active');
        topLight.classList.remove('top-img-light-active');
        topDark.classList.remove('top-img-dark-active');
    })

sun.addEventListener('click', ()=> {
document.body.classList.remove('dark-active-fonts')
    light.classList.remove('light-img-active');
    dark.classList.remove('dark-img-active');
    darkAc.classList.remove('dark-active-hide');
    sun.classList.remove('sun-active');
    topLight.classList.remove('top-img-light-active');
    topDark.classList.remove('top-img-dark-active');
})

// Drop down More btn


// A color changing
let firstA = document.querySelector('.first-a');
let secondA = document.querySelector('.second-a');
let thirdA = document.querySelector('.third-a');
let fourthA = document.querySelector('.fourth-a');

firstA.style.color = '#0057FF'

firstA.addEventListener('click', ()=> {
    firstA.style.color = '#0057ff';
    secondA.style.color = '#444';
    thirdA.style.color = '#444';
    fourthA.style.color = '#444';
    secondA.style.transition = 'all 0.5s ease';
    firstA.style.transition = 'all 0.5s ease';
    thirdA.style.transition = 'all 0.5s ease';
    fourthA.style.transition = 'all 0.5s ease';
})

secondA.addEventListener('click', ()=> {
    secondA.style.color = '#0057ff';
    firstA.style.color = '#444';
    thirdA.style.color = '#444';
    fourthA.style.color = '#444';
    secondA.style.transition = 'all 0.5s ease';
    firstA.style.transition = 'all 0.5s ease';
    thirdA.style.transition = 'all 0.5s ease';
    fourthA.style.transition = 'all 0.5s ease';
})

thirdA.addEventListener('click', ()=> {
    thirdA.style.color = '#0057ff';
    firstA.style.color = '#444';
    secondA.style.color = '#444';
    fourthA.style.color = '#444';
    secondA.style.transition = 'all 0.5s ease';
    firstA.style.transition = 'all 0.5s ease';
    thirdA.style.transition = 'all 0.5s ease';
    fourth.style.transition = 'all 0.5s ease';
})

fourthA.addEventListener('click', ()=> {
    fourthA.style.color = '#0057ff';
    firstA.style.color = '#444';
    secondA.style.color = '#444';
    thirdA.style.color = '#444';
    secondA.style.transition = 'all 0.5s ease';
    firstA.style.transition = 'all 0.5s ease';
    thirdA.style.transition = 'all 0.5s ease';
    fourthA.style.transition = 'all 0.5s ease';
})

// Responsive Side 

// Nav bar appier and hide

let elYes = document.querySelector('.yes');
let elTotalNav = document.querySelector('.total-nav-responsive');
let elX = document.querySelector('.xex');



elYes.addEventListener('click', ()=> {
    elTotalNav.classList.add('total-nav-responsive-active');
    elYes.classList.add('yes-active');
    elX.classList.add('xex-active');
})

elX.addEventListener('click', ()=> {
    elTotalNav.classList.remove('total-nav-responsive-active');
    elYes.classList.remove('yes-active');
    elX.classList.remove('xex-active');
})











