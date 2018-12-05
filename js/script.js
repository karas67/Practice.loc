window.onload = function(){

$(document).ready(function() {
    $('.slider').lightSlider({
        adaptiveHeight:true,
        item:1,
        speed: 2000,
        slideMargin:0,
        loop:true
    });
});

    /*header__acordeon*/
var menuElem = document.getElementById('dropdown-menu'),
titleElem = menuElem.querySelector('.title');
document.onclick = function(event) {
    var target = elem = event.target;
    while (target != this) {
        if (target == menuElem) {
            if(elem.tagName == 'A') titleElem.innerHTML = elem.textContent;
            menuElem.classList.toggle('open');
            return;
        }
        target = target.parentNode;
    }
    menuElem.classList.remove('open');
};

/*footer__acordeon*/

var accordions = document.getElementsByClassName('footer__accordion');

    for (var i = 0; i < accordions.length; i++) {
        accordions[i].onclick = function() {
            this.classList.toggle('open');
            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            }
            else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }
};

/*scroll-up*/
$(document).ready(function () {
   var offset = 400;
   var duration = 700;

   $(window).scroll(function () {
       if($(this).scrollTop() > offset) {
           $('.scroll__up').fadeIn(duration);
       }
       else {
           $('.scroll__up').fadeOut(duration);
       }
   });
    $('.scroll__up').click(function () {
        $('body').animate({scrollTop: 0},duration);
        $('html').animate({scrollTop: 0},duration);
    })
});

