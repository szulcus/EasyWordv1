let menu = document.querySelector('.hamburger');

menu.addEventListener('click', function() {
  this.classList.toggle('hamburger--active');
}, false);

$(document).ready(function(){
  $('.hamburger').click(function(){
    $('nav li').stop().slideToggle(500);
  });
}); 