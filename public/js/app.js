$(document).ready(function(){
    let openMobileMenu = $('.navbar-toggler');
    let mobileMenu = $('.mobile-menu');
    let mobileContent = $('.mobile-menu .content');
    let closemobileMenu = $('.close-btn-wrapper');

    $(openMobileMenu).click(function(){
        $(mobileMenu).addClass('active');
    });

    $(closemobileMenu).click(function(){
        $(mobileMenu).removeClass('active');
    });
});

$(document).mouseup(function(e){
    var container = $(mobileContent);

    if ($(mobileMenu).hasClass('active')) {
        if (!container.is(e.target) && container.has(e.target).length === 0) {
      
       $(mobileMenu).removeClass('active')

    }
    }
});