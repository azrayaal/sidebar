const menu = document.getElementById('tombol');
const sidebar =document.querySelector('.sidebar');
const close = document.getElementById('menu');
const backdrop =document.querySelector('.backdrop');

menu.addEventListener('click', (tombol)=>{
    sidebar.classList.remove('inactive');
    backdrop.classList.add('show');
});

close.addEventListener('click', ()=> {
    sidebar.classList.add('inactive');
    backdrop.classList.remove('show');
});