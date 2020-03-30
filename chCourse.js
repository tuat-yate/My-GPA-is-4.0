$(function(){
  $('#BaseInfo_lbl_div_name').on('click',function(){
    var ctxt=$('#BaseInfo_lbl_div_name').text();
    if(ctxt=='数理情報工学コース'){
      $('#BaseInfo_lbl_div_name').text('電子情報工学コース');
    }
    else if(ctxt=='電子情報工学コース'){
      $('#BaseInfo_lbl_div_name').text('数理情報工学コース');
    }
  });
});
