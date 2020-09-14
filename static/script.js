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
  console.log(target);

  // Hide all tabs
  $('.tab-contents .tab').removeClass('active');

  // Show only $target tab
  $target.each(function(i){
            $(this).addClass('active'); // $(this), not the id element
        });
  //$target.addClass('active');
});
