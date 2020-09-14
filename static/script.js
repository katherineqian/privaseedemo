/* $(document).ready(function() {
  $(".list-group-item").on('click', function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
    console.log($(this).html());
    // Code here whatever you want or you can call other function here
  });
}); */

// jQuery version
$('body').on('click', '[data-toggle="tab"]', function(e) {
  e.preventDefault();
  // Select our target
  var $target = $($(this).data('target'));
  // Hide all tabs
  $('.tab-contents .tab').removeClass('active');
  // Show only $target tab
  $target.addClass('active');
});
