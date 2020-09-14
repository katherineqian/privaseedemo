$(document).ready(function() {
  $(".list-group-item").live('click', function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
    console.log($(this).html());
    // Code here whatever you want or you can call other function here
  });
});
