$(document).ready(function () {
  var navTop = $('#nav').offset().top;
  var sections = []
  $("section").each(function() {
    // console.log($(this).attr('id'), $(this).offset().top)
    sections.push({id: "#" + $(this).attr('id'), top: $(this).offset().top})
  });

  console.log(sections);

    $(window).bind('scroll', function () {
        var windowTop = $(window).scrollTop();
        var navWindowTop = navTop - windowTop;
        // console.log(navWindowTop);
        // console.log(projectsTop-windowTop);

        if (navWindowTop <= 0) {
            $('.navbar').addClass('navbar-docked');
        } else {
            $('.navbar').removeClass('navbar-docked');
        }

        if (windowTop >= sections[0].top && windowTop < sections[1].top) {}

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


});
