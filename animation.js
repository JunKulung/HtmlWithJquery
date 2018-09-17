//navbar fade in/out
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".navbar").css({
                "opacity": "1"
            })


        } else {
            $(".navbar").css({
                "opacity": "0"
            })
            $(".navbar").css({
                "visibility": "visible"
            })
        }
    })
})
//container animation
$(document).ready(function() {
    $('.container-fluid').fadeOut(3);

    $('.container-fluid').fadeIn(2500);
});
//container animation
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $(".secondcontainer").css({
                "opacity": "0"})
        } else {
            $(".secondcontainer").css({
                "opacity": "1"})

        }
    })
})
//button on the bottom-right
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".toggleup").css({
                "opacity": "1"
            })


        } else {
            $(".toggleup").css({
                "opacity": "0"
            })
            $(".toggleup").css({
                "visibility": "visible"
            })
        }
    })
})
//last container
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 450) {
            $(".bg-3").css({
                "opacity": "1"
            })


        } else {
            $(".bg-3").css({
                "opacity": "0"
            })
            $(".bg-3").css({
                "visibility": "visible"
            })
        }
    })
})
//image hover effect
$(document).ready(function() {
    $(".bg-3 img").hover(function() {
        $(this).css("opacity", "1");
    }, function() {
        $(this).css("opacity", "0.7");
    });
});
//smooth scrolling
$(document).ready(function() {
  
    $(".toggleup").on('click', function(event) {

        if (this.hash !== "") {
            
            event.preventDefault();

          
            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function() {

         
                window.location.hash = hash;
            });
        } 
    });
});