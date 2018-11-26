$(document).ready(function() {
    $('.slider').lightSlider({
        adaptiveHeight:true,
        item:1,
        speed: 2000,
        slideMargin:0,
        loop:true
    });
});

window.onload = function(){
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
    }
}