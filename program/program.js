$(document).ready(function(){
    $('.superbig_wrapper').scroll(function(){
        $('#round1').css("opacity",$('.superbig_wrapper').height());
        $('#round2').css("opacity", $(this).scrollTop()/($('.superbig_wrapper').height()));
        $('#round3').css("opacity", ($(this).scrollTop()- $('.superbig_wrapper').height())/($('.superbig_wrapper').height()));
        $('#round4').css("opacity", ($(this).scrollTop()- 2*$('.superbig_wrapper').height())/($('.superbig_wrapper').height()));
        $('#round5').css("opacity", ($(this).scrollTop()- 3*$('.superbig_wrapper').height())/($('.superbig_wrapper').height()));
    })
})