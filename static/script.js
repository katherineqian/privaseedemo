/* $(document).ready(function() {
  $(".list-group-item").on('click', function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
    console.log($(this).html());
    // Code here whatever you want or you can call other function here
  });
}); */

// Native JS version
// Working Fiddle : https://jsfiddle.net/d34cbtw7/
var togglers = document.querySelectorAll('[data-toggle="tab"]');

for (var i = 0; i < togglers.length; i++) {
    togglers[i].addEventListener('click', function() {
        var tabs = document.querySelectorAll('.tab');
        for(var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active');
        }
        var $target = document.querySelector(this.getAttribute('data-target'));
        $target.classList.add('active');
    });
}

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
