$(function(){
  console.log("welcome to console!!");
  $('#table4 td').each(function(){
    var txt=$(this).html();
    if(txt.match(/.*[0-9]\.[0-9][0-9].*/g)){
      $(this).html(txt.replace(/[0-9]\.[0-9][0-9]/g,'4.00'));
    };
  });
});
