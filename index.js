const clickdown = document.querySelector('#clickdown');
const menu = document.querySelector('#menu');

clickdown.addEventListener('click', ()=>{
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})