jQuery('.button')
  .popup({
    on: 'hover',
    position : 'right top',
  })
;

$('.ui.checkbox').checkbox();

$('.show-modal-edit').click(function() {
  var modal_id = $(this).attr('data-modal');
  $(modal_id).modal('show');
  return false;
});

$('#step-by-step').smartWizard({
  enableAllSteps:'true'
});

$('.page-l301 .table-normal .wrapper-content .smd-edit-button a').click(function() {
  $(this).parents('body').find('wrapper-content .text-note').removeClass('text-note-clicked');
  $(this).parents('.wrapper-content').find('.text-note').addClass('text-note-clicked');
  var val_text = $(this).parents('.wrapper-content').find('.text-note').text();
  $(this).parents('body').find('#modal-edit-text textarea').val(val_text);
});

$('#modal-edit-text .btn-confirmed').click(function() {
  var val_text_modal = $(this).parents('#modal-edit-text').find('.content-modal .edit-text').val();
  $(this).parents('body').find('.wrapper-content .text-note.text-note-clicked').text(val_text_modal);
});


$(".smd-text-data").click(function(){

    var selection = window.getSelection();
    if(selection == 0)
    {
        if($(this).hasClass("clicked"))
            $(this).removeClass("clicked");
        else
            $(this).addClass("clicked");
    }
});

$('.popup-text-data .content').bind("DOMSubtreeModified",function(){
  $(".smd-text-data .popup-text-data .btn-group .confirmed").click(function(){
    var text_rule_content_popup = $(this).parents('.popup-text-data').find('.content').html();
    $(this).parents('.smd-text-data').find('.text-data').html(text_rule_content_popup);
    return false;
  });
});

$(".smd-text-data").one("click", function () {
    var rule_content = $(this).find('.text-data').html();
    $(this).find('.popup-text-data .ctn-popup .content').append(rule_content);
});

// $(".smd-text-data").click(function(){
//     var selection = window.getSelection();
//     if(selection == 0)
//     {
//       if($(this).hasClass("clicked"))
//           $(this).removeClass("clicked");
//       else
//           $(this).addClass("clicked");
//     }
// });

$(".smd-text-data").mouseup(function(){
  $(".smd-icon-edit .icon-confirm").click(function(){
    $(this).parents(document.execCommand("BackColor", false, "red"));
    document.designMode = "off";
    var rule_content = $(this).parents('tr').find('.smd-text-data .text-data').html();
    $(this).parents('tr').find('.popup-text-data .ctn-popup .content').html(rule_content);
  });
  $(".smd-icon-edit .icon-reset").click(function(){
    $(this).parents('tr').find('.smd-text-data .text-data').find("span").contents().unwrap();
  });
});

$(".smd-text-data .popup-text-data .btn-group").mouseup(function(){
  $(".smd-icon-edit .icon-confirm").click(function(){
    $(this).parents(document.execCommand("BackColor", false, "red"));
    document.designMode = "off";
  });
  $(".smd-icon-edit .icon-reset").click(function(){
    $(this).parents('tr').find('.smd-text-data .text-data').find("span").contents().unwrap();
  });
});

// $(".smd-text-data").mousedown(function(){
//    $(".smd-text-data").designMode = "on";
// });

$('.smd-meta-updown .icon-coppy').on('click', function(){
  var ele = $(this).closest('tr').clone(true);
  $(this).closest('tr').after(ele);
  ele.find('.smd-meta-updown').addClass('added');
  ele.find('.smd-info-secret .content-info').empty();
  ele.find('.rating .md-rating ul li .active').removeClass('active');
  ele.find('.md-three-col .active').removeClass('active');
  ele.find('.rating .smd-note-buttom .blue').removeClass('blue');
  ele.find('.rating .smd-note-buttom .pink').removeClass('pink');
});

$('.smd-meta-updown .icon-download .icon').on('click', function(){
  var ele = $(this).closest('tr').clone(true);
  $(this).closest('tr').after(ele);
  ele.find('.smd-meta-updown').addClass('added');
  ele.find('.smd-meta-updown').addClass('added');
  ele.find('.smd-text-data .text-data').empty();
  ele.find('.smd-rule-title').attr('contenteditable', 'true');
});

$('.smd-meta-updown .icon-upload').on('click', function(){
  var text_rule_title = $(this).parents('tr').find('.smd-rule-title').html();
  var text_rule_content = $(this).parents('tr').find('.smd-text-data .text-data').html();
  $(this).parents('tr').prev().find('.smd-rule-title').append(text_rule_title);
  $(this).parents('tr').prev().find('.text-data').append(text_rule_content);
  $(this).parents('tr').prev().find('.popup-text-data .ctn-popup .content').append(text_rule_content);
});

$('.smd-meta-updown .icon-delete').on('click', function(){
  $(this).parents('tr').remove();
});
