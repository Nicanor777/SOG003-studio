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

$(document).ready(function(){
  $("#project1").mouseover(function(){
    $("#work1").show();
  }).mouseout(function(){
    $("#work1").hide();
  });
});

$(document).ready(function(){
  $("#project2").mouseover(function(){
    $("#work2").show();
  }).mouseout(function(){
    $("#work2").hide();
  });
});

$(document).ready(function(){
  $("#project3").mouseover(function(){
    $("#work3").show();
  }).mouseout(function(){
    $("#work3").hide();
  });
});

$(document).ready(function(){
  $("#project4").mouseover(function(){
    $("#work4").show();
  }).mouseout(function(){
    $("#work4").hide();
  });
});

$(document).ready(function(){
  $("#project5").mouseover(function(){
    $("#work5").show();
  }).mouseout(function(){
    $("#work5").hide();
  });

  $("#project6").mouseover(function(){
    $("#work6").show();
  }).mouseout(function(){
    $("#work6").hide();
  });

  $("#project7").mouseover(function(){
    $("#work7").show();
  }).mouseout(function(){
    $("#work7").hide();
  });
  
  $("#project8").mouseover(function(){
    $("#work8").show();
  }).mouseout(function(){
    $("#work8").hide();
  });
});