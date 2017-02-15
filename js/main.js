$(document).ready(function () {
  var navTop = $('#nav').offset().top;
  var sections = []
  var windowTop = $(window).scrollTop();
  $("section").each(function() {
    // console.log($(this).attr('id'), $(this).offset().top)
    sections.push({id: "#" + $(this).attr('id'), top: $(this).offset().top})
  });

  console.log(sections);

    $(window).bind('scroll', function () {
        windowTop = $(window).scrollTop();
        var navWindowTop = navTop - windowTop;

        if (navWindowTop <= 0) {
            $('.navbar').addClass('navbar-docked');
        } else {
            $('.navbar').removeClass('navbar-docked');
        }

        for (var i=1; i<sections.length; i++) {
          if (windowTop >= sections[i-1].top && windowTop < sections[i].top) {
            console.log($(".navbar-item")[i-1])
          }
        }
        if (windowTop >= sections[sections.length-1].top) {
          console.log($(".navbar-item")[sections.length-1])
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
      // console.log(elementID);
        $('html, body').animate({
            scrollTop: $(elementID).offset().top
        }, 1000);
    }

    var angle = 15;
    var faceInterval = setInterval(function(){
      angle *= -1;
      $("#about-image").css({transform: "rotate("+ angle +"deg)"});
    }, 1000)


});
