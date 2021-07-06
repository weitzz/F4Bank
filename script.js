const btnMobile = document.getElementById('menu-mobile')

function toggleMenu(){
    const navBar = document.getElementById('navbar')
    navBar.classList.toggle('active')
}


btnMobile.addEventListener('click',toggleMenu)