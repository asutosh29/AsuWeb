
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.right-nav')

burger.addEventListener('click', ()=>{
    // console.log('Clicked')
    navbar.classList.toggle('h-nav-resp')
    navList.classList.toggle('visibility-class-resp')
    rightNav.classList.toggle('visibility-class-resp')
})

