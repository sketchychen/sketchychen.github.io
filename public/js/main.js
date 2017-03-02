$(document).ready(function () {
  var navTop = $('#nav').offset().top;
  var sections = []
  var windowTop = $(window).scrollTop();
  $("section").each(function() {
    sections.push({id: "#" + $(this).attr('id'), top: $(this).offset().top})
  });

    $(window).bind('scroll', function () {
        windowTop = $(window).scrollTop();
        var navWindowTop = navTop - windowTop;

        if (navWindowTop <= 0) {
            $('.navbar').addClass('navbar-docked');
        } else {
            $('.navbar').removeClass('navbar-docked');
        }

        for (var i=1; i<sections.length; i++) {
          if (i !== sections.length-1) {
            if (windowTop > (sections[i-1].top + 2*sections[i].top)/3 && windowTop <= (sections[i].top + 2*sections[i+1].top)/3) {
              $(".navbar-button:eq("+(i)+")").addClass('navbar-current');
            } else {
              $(".navbar-button:eq("+(i)+")").removeClass('navbar-current');
            }
          } else {
            if (windowTop > (sections[i-1].top + 2*sections[i].top)/3) {
              $(".navbar-button:eq("+(i)+")").addClass('navbar-current');
            } else {
              $(".navbar-button:eq("+(i)+")").removeClass('navbar-current');
            }
          }
        }

    });

    $(".navbar-button").each(function() {
      var button = this;
      button.addEventListener("click", function() {
        var elementID = '#' + this.innerText.toLowerCase();
        // console.log(elementID);
        scrollTo(elementID);
      })
    })

    function scrollTo(elementID) {
      console.log(elementID);
        $('html, body').animate({
            scrollTop: $(elementID).offset().top - $('.navbar').height()
        }, 1000);
    }

    var angle = 15;
    var faceInterval = setInterval(function(){
      angle *= -1;
      $("#about-image").css({transform: "rotate("+ angle +"deg)"});
    }, 1000)


});
