const navElement = document.querySelector('.nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if(currentScroll > lastScroll){
        navElement.classList.add('hide');
    }
    else{
        navElement.classList.remove('hide');
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
})