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
  var target = '.'+$(this).attr('data-target');
  console.log(target);

  // Hide all tabs
  $('.tab-contents .tab').removeClass('active');
  $('.keytab-contents .keytab').removeClass('active');

  $('.tab-contents .tab '+target).addClass('active');
  $('.keytab-contents .keytab '+target).addClass('active');
});
