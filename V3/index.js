$(document).ready(function() {
    $('.nav-item').hover(function() {
        $(this).css({'border-bottom': 'solid', 'border-bottom-color': 'green'});     
    });
    
    $('.nav-item').mouseleave(function() {
        $(this).css({'border-bottom': 'none'});     
    });
});