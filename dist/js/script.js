//Navbar Fixed
window.onscroll = function(){
    const header =  document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed')
    }
    }


//droplist
const droplist = document.querySelector('#droplist');
const navMenu = document.querySelector('#nav-menu')

droplist.addEventListener('click', function(){
    droplist.classList.toggle('droplist-active');
    navMenu.classList.toggle('hidden')
});