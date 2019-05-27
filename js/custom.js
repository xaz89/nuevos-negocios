/* $('#alta').hover(function () {

    $('.color div:first').addClass('hover azul').fadeIn(300);
}); */



// Funciones materialize

$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.datepicker').datepicker();
    $('select').formSelect();
    $('.modal').modal();
    $('.tabs').tabs();



});



$(".sidenav li").hover(function() {
    var valor = $(this).val();
    console.log(valor);
    var clase = ' ';
    switch (valor) {
        case 1:
            clase = 'azul';
            break;
        case 2:
            clase = 'rosa';
            break;
        case 3:
            clase = 'amarillo';
            break;
        case 4:
            clase = 'verde';
            break;


        default:
            clase = ' ';
            break;
    }

    $('.color div:first').addClass('hover ' + clase);
    // $('.todo').addClass('d-none').fadeIn(300);   

}).mouseleave(function() {
    $(".color div:first").removeAttr('class');
    /* $('.todo').removeClass('d-none').fadeIn(300); */
});





/* typewriter */

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};