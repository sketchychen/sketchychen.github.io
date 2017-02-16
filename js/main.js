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

        for (var i=2; i<sections.length; i++) {
          if (windowTop >= sections[i-1].top && windowTop < sections[i].top) {
            $(".navbar-button:eq("+(i-1)+")").addClass('navbar-current');
          } else {
            $(".navbar-button:eq("+(i-1)+")").removeClass('navbar-current');
          }

          // if (windowTop === sections[i].top){
          //   console.log($(".navbar-item")[i])
          //   $(".navbar-button:eq("+i+")").addClass('navbar-current');
          // } else if (windowTop !== sections[i].top) {
          //   $(".navbar-button:eq("+i+")").removeClass('navbar-current');
          // }
        }
        if (windowTop >= sections[sections.length-1].top) {
          $(".navbar-button:eq("+(i-1)+")").addClass('navbar-current');
        } else {
          $(".navbar-button:eq("+(i-1)+")").removeClass('navbar-current');
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
