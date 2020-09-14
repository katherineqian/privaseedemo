/* $(document).ready(function() {
  $(".list-group-item").on('click', function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
    console.log($(this).html());
    // Code here whatever you want or you can call other function here
  });
}); */

// jQuery version
$(document).ready(function() {
  $(".list-group-item").on('click', function(e){

    e.preventDefault();
    // Select our target
    var target = $(this).attr('data-target');
    console.log("WTDF????");

    // Hide all tabs
    $('.tab-contents .tab').removeClass('active');
    $('.keytab-contents .keytab').removeClass('active');

    $(target).addClass('active');

    //$('.active').removeClass('active');
    //$(this).addClass('active');
    console.log($(this).html());
    // Code here whatever you want or you can call other function here
  });
});
