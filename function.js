// Code By Webdevtrick ( https://webdevtrick.com )
$('body').delegate('.FAQ', 'click', function(){
  $('.FAQ').removeClass('FAQ--active');
  $(this).addClass('FAQ--active');
});
