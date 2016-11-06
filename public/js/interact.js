$(document).ready(function(){

   $('.button').click(function() {
      $('.active').removeClass('active');
      $(this).addClass('active');
   });
});
