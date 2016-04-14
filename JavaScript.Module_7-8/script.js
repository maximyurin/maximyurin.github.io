$(document).ready(function() {
    $('.tabs-links li a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
        $('.tabs ' + currentAttrValue).slideDown(300).show().siblings().hide();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
    $('input').hover(function() {
        $(this).next().fadeIn(700).show();
        window.setTimeout(function() {
            $('input').next().hide(500);
        }, 3000);
    });
    $('.form-button').on('click', function() {
        $('input').next().fadeIn(500).show();
        window.setTimeout(function() {
            $('input').next().hide();
        }, 3000);
    });
});
