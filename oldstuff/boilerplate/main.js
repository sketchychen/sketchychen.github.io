$(document).ready(function () {

    $(window).bind('scroll', function () {
        var vPos = $(window).scrollTop();
        var totalH = $('#nav').offset().top;
        var finalSize = totalH - vPos;

        // console.log(finalSize);

        if (finalSize <= 0) {
            $('.navbar').addClass('navbar-docked');
        } else {
            $('.navbar').removeClass('navbar-docked');
        }
    });

    $(".navbar-button").each(function() {
      var button = this;
      button.addEventListener("click", function() {
        var elementID = '#' + this.innerText;
        // console.log(elementID);
        scrollTo(elementID);
      })
    })

    function scrollTo(elementID) {
      console.log(elementID);
        $('html, body').animate({
            scrollTop: $(elementID).offset().top
        }, 1000);
    }


});
