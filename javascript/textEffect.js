/* This animation won't work in any version of IE. */

$(document).ready(function(){
  $('#svgWrapper').mouseleave(function(){
    $(this).removeClass('clicked');
  }).click(function(){
    $(this).addClass('clicked').html($(this).html());
  });
});
