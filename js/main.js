$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown('slow').hide('slow');
    $("#design").show('slow');
  });
  $("#design").click(function(){
    $("#design").slideUp('slow');
    $("#design-image").slideDown('slow');
  });
});

$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown('slow').hide('slow');
    $("#development").show('slow');
  });
  $("#development").click(function(){
    $("#development").slideUp('slow');
    $("#development-image").slideDown('slow');
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown('slow').hide('slow');
    $("#product").show('slow');
  });
  $("#product").click(function(){
    $("#product").slideUp('slow');
    $("#product-image").slideDown('slow');
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