// jQuery version
$(document).ready(function() {
  $(".list-group-item").on('click', function(e){

    e.preventDefault();
    // Select our target
    var target = $(this).attr('data-target');

    // make the list active
    $('.active').removeClass('active');
    $(this).addClass('active');

    // Hide all tabs
    $('.tab-contents .tab').removeClass('active');
    $('.keytab-contents .keytab').removeClass('active');

    $(target).addClass('active');

    //console.log($(this).html());
  });
});

function keywordToggle() {
  $("b").toggleClass("hidden");
}

$(function () {
    $("#switch-id").change(function () {
        if ($(this).is(":checked")) {
            $(".contentB").show();
            $(".contentA").hide();
        } else {
            $(".contentB").hide();
            $(".contentA").show();
        }
    });
});
