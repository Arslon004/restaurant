let menu=document.querySelector('#menu-bars')
let navbar=document.querySelector('.navbar');

menu.onclick= () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active')
}

window.onscroll=function(){
  menu.classList.remove('fa-times');
  navbar.classList.remove('active')
}

document.getElementById('search-icon').onclick=function(){
  document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick=function(){
  document.querySelector('#search-form').classList.remove('active')
}
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
