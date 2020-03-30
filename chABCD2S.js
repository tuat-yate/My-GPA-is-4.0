$(function(){
  $('#rdlGrid_gridList tr').each(function(){
    var txt=$(this).html();
    if(txt.match(/.*[ABCD].*/g)){
      $(this).html(txt.replace(/">[ABCD]<\/td>/g,'">S</td>'));
    }
  });
});
