$(document).ready(function(){
  $('#us').last().click(function(){
      $('.about').toggle();
  })
 
 })
$(document).ready(function() {
  $("#oilimg").click(function() {
      $('#oilimg').slideDown('1500').hide('1000');
      $("#oil").show('1500');
  });
  $("#oil").click(function() {
      $("#oil").slideUp('1500').hide('1000');
      $("#oilimg").show('1500');
  });
});

$(document).ready(function() {
  $("#airimg").click(function() {
      $('#airimg').slideDown('1500').hide('1000');
      $("#air").show('1500');
  });
  $("#air").click(function() {
      $("#air").slideUp('1500').hide('1000');
      $("#airimg").show('1500');
  });
});

$(document).ready(function() {
  $("#coolimg").click(function() {
      $('#coolimg').slideDown('1500').hide('1000');
      $("#cool").show('1500');
  });
  $("#cool").click(function() {
      $("#cool").slideUp('1500').hide('1000');
      $("#coolimg").show('1500');
  });
});

$(document).ready(function() {
  $("#brakeimg").click(function() {
      $('#brakeimg').slideDown('1500').hide('1000');
      $("#brakes").show('1500');
  });
  $("#brakes").click(function() {
      $("#brakes").slideUp('1500').hide('1000');
      $("#brakeimg").show('1500');
  });
});

$(document).ready(function() {
  $("#serviceimg").click(function() {
      $('#serviceimg').slideDown('1500').hide('1000');
      $("#service").show('1500');
  });
  $("#service").click(function() {
      $("#service").slideUp('1500').hide('1000');
      $("#serviceimg").show('1500');
  });
});

$(document).ready(function() {
  $("#sevenimg").click(function() {
      $('#sevenimg').slideDown('1500').hide('1000');
      $("#seven").show('1500');
  });
  $("#seven").click(function() {
      $("#seven").slideUp('1500').hide('1000');
      $("#sevenimg").show('1500');
  });
});

$(document).ready(function(){
  $('#us').click(function(){
      $('.about').toggle();
  });
 
 });
 $(document).ready(function(){
  $("#submit").click(function(){
      alert("Your message have been received,we will get in touch with you shortly via phone")
  });
});