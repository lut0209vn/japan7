$('.ui.dropdown')
  .dropdown()
;
$('[data-click="modal"]').click(function() {
  var modal_id = $(this).attr('href');
  $(modal_id).modal('show');
  return false;
});

$(".md-nav-sidebar ul li").click(function(){
  $(".md-nav-sidebar ul li ul").toggleClass('active');
});
$(".scroll-normal").mCustomScrollbar({
  scrollButtons:{enable:true},
   theme:"dark"
});
$(".md-scroll-normal").mCustomScrollbar({
  scrollButtons:{enable:true},
   theme:"dark"
});
$(".scroll-normal").mCustomScrollbar({
  scrollButtons:{enable:true},
   theme:"dark"
});
$(".content-terms-register").mCustomScrollbar({
   theme:"dark"
});
$(".smd-checkbox-option").mCustomScrollbar({
   theme:"dark"
});
$(".inner-content-scroll-1").mCustomScrollbar({
   theme:"dark"
});
$(".inner-content-scroll-2").mCustomScrollbar({
   theme:"dark"
});

$(".table-sorter-1").tablesorter({
  headers: {
    0: { sorter: false},
    1:{sorter: false},
    2:{sorter: false},
    5:{sorter: false},
    6:{sorter: false},
    7:{sorter: false}
  }
});
$(".table-sorter-2").tablesorter({
  headers: {
    0: { sorter: false},
    1:{sorter: false},
    2:{sorter: false},
    3:{sorter: true},
    5:{sorter: false},
    6:{sorter: false},
    7:{sorter: false}
  }
});

$( ".button-status" ).click(function(){
      $('.ui.modal')
        .modal('show')
      ;
})

$( ".md-popup-normal" ).click(function(){
     $('.ui.modal')
       .modal('show')
     ;
})
$( ".btn-close-modal" ).click(function(){
     $('.ui.modal')
       .modal('hide')
     ;
})

$(".smd-toggle-checkbox").click(function(){
  $(this).parents('body').find('.checkbox-clicked').removeClass('checkbox-clicked');
  $(this).find(".button-toogle-checkbox").addClass('checkbox-clicked');
  $('#modal-confirm-change').modal('show');
});

$("#modal-confirm-change .btn-modal-group .button-confirm").click(function(){
  var check_button_clicked = $(this).parents('body').find('.button-toogle-checkbox');
  if((check_button_clicked).hasClass('checkbox-clicked')){
    $('body').find('.button-toogle-checkbox.checkbox-clicked').toggleClass('checked');
  }else{
    $('body').find('.button-toogle-checkbox.checkbox-clicked').toggleClass('checked');
  }
  $('#modal-confirm-change').modal('hide');
  return false;
});
$(".popup-close-button close-icon").click(function(){
  $(".popup-close-button").hide();
});
$( ".smd-text-data" ).click(function(){
  $(this).parents('body').find('.smd-text-data .popup-text-data').removeClass('active');
  $(this).find('.popup-text-data').toggleClass('active');
})
$( ".smd-meta-updown .icon-download" ).click(function(){
  $(this).parents('body').find('.smd-meta-updown .popup-download').removeClass('active');
  $(this).find('.popup-download').toggleClass('active');
})
$(document).mouseup(function(e){
  var edit_container = $(".smd-text-data");
  var download_container = $(".smd-meta-updown");
  if (!edit_container.is(e.target) && edit_container.has(e.target).length === 0)
  {
      edit_container.find('.popup-text-data').removeClass('active');
  }

  if (!download_container.is(e.target) && download_container.has(e.target).length === 0)
  {
      download_container.find('.popup-download').removeClass('active');
  }
});
