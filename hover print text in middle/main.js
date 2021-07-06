
$(document).ready(function () {
  $(".flag").hover(
    function() {
      $(this).find("span").css("display", "block");
    }, function() {
      $(this).find("span").css("display", "none");
    }
  );
});