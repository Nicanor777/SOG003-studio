// $(document).ready(function () {
//   $("img.design1").hover(function(){
//     $(this).css("text-align", "left");
//     $(this).css("color", "pink")
//     });
// }); 

// $(document).ready(function () {
//   $("#design-image").hover(function () {
//       $(this).stop().animate({
//           opacity: .4
//       }, 200);
//       $("#design-image").slideDown('1500').hide('1000');
//       $("#design").show('1500');
//       // $("design").removeClass('hide');
//   }, function () {
//       $(this).stop().animate({
//           opacity: 1
//       }, 500);
//       $("#design-image").slideUp('hide');
//       $("#design").slideDown('1500').hide('1000');
//   });
// });



$(document).ready(function() {
  $('#design-image').hover(function(){
  $("#design-image").slideDown('1500').hide('1000');
  // $('#design').slideToggle('slow');
}, function(){
  $("#design").slideUp('1500');
  $('#design').slideToggle('slow');
  });
});

$(document).ready(function() {
  $('#development-image').hover(function(){
  $("#development-image").slideDown('1500').hide('1000');
}, function(){
  $("#development").slideUp('1500');
  $('#development').slideToggle('slow');
  });
});

$(document).ready(function() {
  $('#product-image').hover(function(){
  $("#product-image").slideDown('1500').hide('1000');
  $("#product").slideDown('1000');
}, function(){
  $("#product").slideUp('1500').hide('1000');
  $("#product-image").slideUp('1500');
  });
});



$(document).ready(function(){
  $("form#contact-form").submit(function(event){
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#content").val();
    if ($("input#name").val() && $("input#email").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});  














// $(document).ready(function () {
//   $("contact-form").submit(function (event) {
//     // event.preventDefault();
//     var name = $("input#name").val();
//     var email = $("input#email").val();
//     var message = $("textarea#contact").val();
//     if ($("input#name").val() && $("input#email").val()) {
//       alert(name + ", we have received your message. Thank you for reaching out to us.");
//     }
//     else {
//       alert("Please enter your name and email!");
//     }

//   });
// });