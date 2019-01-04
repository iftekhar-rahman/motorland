jQuery(document).ready(function($){



    $('select').niceSelect();

    // homepage-slides
	$(".homepage-slides-wrap").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: false,
		autoplay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});

    // Featured carousel
    $(".featured-carousel").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        margin: 30,
        dots: false,
        autoplay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Team carousel
    $(".team-carousel-wrap").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        margin: 30,
        dots: false,
        autoplay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Team carousel
    $(".review-carousel-wrap").owlCarousel({
        items: 2,
        loop: true,
        nav: false,
        dots: true,
        autoplay: false
    });

    // Team carousel
    $(".latest-news-wrap").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        margin: 30,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Logo carousel
    $(".logo-carousel-wrap").owlCarousel({
        items: 6,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        margin: 30
    });



    $('.progress-number').counterUp({
        delay: 10,
        time: 1000
    });

    // jQuery for active class
    $("ul.filter-menu li").on('click', function(){
       
       $("ul.filter-menu li").removeClass("active"); 
       $(this).addClass("active");

       var selector = $(this).attr("data-filter");
       $(".photo-gallery-wrap").isotope({
            filter: selector,
       });
       
    });

    //Click event to scroll to top
    $('.scroll-top').click(function(){
        $('html, body').animate({scrollTop : 0},900);
        return false;
    });


    // $('#map').gmap3({
    //   address: "Haltern am See, Weseler Str. 151",
    //   zoom: 6,
    //   mapTypeId : google.maps.MapTypeId.ROADMAP
    // });
    var center = [40.6874221, -73.9460678];
    $('.map')
      .gmap3({
        center: center,
        zoom: 10,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
      .infowindow({
        // position: uluru,
        content: "Hello from Uluru"
      })
      .marker({
        position: center,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
    });


    // $('.progress-number').counterUp();


    // var minValue;
    // var maxValue;
    // $("#range_48").ionRangeSlider({
    //     type: "double",
    //     min: 0,
    //     max: 90000,
    //     from: 15000,
    //     to: 75000,
    //     prefix: "£",
    //     step: 500,
    //     onFinish: function(data) {
    //         minValue = data.from;
    //         maxValue = data.to;
    //         alert("Your Min Value: " + minValue +"\n" +  "Your Max Value: " + maxValue);
    //     }
    // });

    // $("#range_49").ionRangeSlider({
    //     type: "single",
    //     min: 150,
    //     max: 250,
    //     from: 200,
    //     to: 250,
    //     prefix: "£",
    //     step: 1,
    //     onFinish: function(data) {
    //         maxValue = data.from;
    //         alert("Your Value: " + maxValue);
    //     }
    // });
    

    // var single_logo_carousel = $('.single-logo-carousel');
    // single_logo_carousel.owlCarousel({
    //     items: 8,
    //     loop: true,
    //     nav: true,
    //     dots: false,
    //     autoplay: false,
    //     margin: 20,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 3,
    //             margin: 20,
    //             nav: false
    //         },
    //         520: {
    //             items: 4,
    //             margin: 10,
    //             nav: false
    //         },
    //         540: {
    //             items: 5,
    //             margin: 4,
    //             nav: false
    //         },
    //         720: {
    //             items: 6,
    //             margin: 10,
    //             nav: false
    //         },
    //         960: {
    //             items: 8,
    //             margin: 10
    //         },
    //         1170: {
    //             items: 8
    //         }

    //     }
    // });


    // $(".single-bodytype-carousel").owlCarousel({
    //     items: 6,
    //     loop: true,
    //     nav: true,
    //     dots: false,
    //     autoplay: false,
    //     margin: 15,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 2,
    //             margin: 15,
    //             nav: false
    //         },
    //         580: {
    //             items: 3,
    //             margin: 3,
    //             nav: false
    //         },
    //         720: {
    //             items: 4,
    //             margin: 3,
    //             nav: false
    //         },
    //         960: {
    //             items: 5
    //         },
    //         1140: {
    //             items: 6
    //         }

    //     }
    // });

    // $(".ourcar-carousel-wrap").owlCarousel({
    //     items: 4,
    //     loop: true,
    //     nav: true,
    //     dots: true,
    //     autoplay: false,
    //     margin: 15,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1,
    //             margin: 0,
    //             nav: false
    //         },
    //         481: {
    //             items: 2,
    //             margin: 15,
    //             nav: false
    //         },
    //         720: {
    //             items: 3,
    //             margin: 15,
    //             nav: false
    //         },
    //         960: {
    //             items: 3,
    //             margin: 25,
    //         },
    //         1140: {
    //             items: 4
    //         }

    //     }
    // });
// Featured Carousel 

// if($(window).width() > 768 && $(window).width() < 990 ) {
//     $(".single-ourcar-carousel > img").css({"height":100 + 'px',"width": 100 + "%"});
// }

// if($(window).width() < 540) {
//     $(".single-ourcar-carousel > img").css({"height":315 + 'px',"width": 100 + "%"});
// }


    // Code for alert boxes
    // $('.brand').change(function(){
    //     var brand = $(".brand").val();
    //      alert("you have selected: " + brand);   
    // });
    // $('.model').change(function(){
    //     var model = $(".model").val();
    //      alert("you have selected: " + model);   
    // });
    // $('.type').change(function(){
    //     var type = $(".type").val();
    //      alert("you have selected: " + type);   
    // });
    // $('.min-yr').change(function(){
    //     var minYear = $(".min-yr").val();
    //      alert("you have selected: " + minYear);   
    // });
   //  $('.max-yr').change(function(){
   //      var maxYear = $(".max-yr").val();
   //       alert("you have selected: " + maxYear);   
   //  });

   // $('.submit-btn').click(function(){
        
   //      var make = $("#Make").val();
   //      var model = $(".model").val();
   //      var type = $(".type").val();
   //      var maxAge = $("#maxAge").val();
   //      alert('You have submitted: \n' + "Make: " + make + "\nBrand Model: " + model+ "\nBody Type: "+ type + "\nMax age: "+ maxAge +"\nMinimum: " + minValue +"\nMaximum: "+ maxValue);
        
   //  });


   //  $('.submit-btn-2').click(function(){
        
   //      alert('You have submitted: \n' + "\n Minimum: " + minValue +"\n Maximum: "+ maxValue);
        
   //  });

   //  $(".switch input[type='checkbox']").change(function(){
   //      if(this.checked){
   //          alert("You have selected monthly payment.");
   //      } else {
   //          alert("You have selected Cash Price.")
   //      }
   //  })
    

   //  $(".menu-trigger").on("click", function(){
   //      $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
   //      return false;
   //  });
   //  $(".menu-close, .off-canvas-overlay").on("click", function(){
   //      $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
   //  });

   //  $(window).on("scroll", function(){
   //      if($(this).scrollTop() > 300) {
   //          $(".chat-box ").addClass("sticky-chatbox");
   //      } else{
   //          $(".chat-box ").removeClass("sticky-chatbox");
   //      }
   //  });


    // $(".scroll-top").on("click", function(){
    //     $("html, body").animate({
    //         scrollTop: 0
    //     },1000);
    // });


 //    if($(window).width() < 750) {
 //       var sliderBg1 =  $('.slider-bg-1');
 //       sliderBg1.css('background-image', 'url(https://s17.postimg.org/44c9hi5gf/mobile-slide-1.png)');
 //    }


	// $(".bodytype-carousel-wrap").magnificPopup({
	// 	type: 'image',
 //        gallery: {
 //            enabled: true
 //        }
	// });



 //    if ($(window).width() > 992) {
 //        $(window).on("scroll", function(){
 //            if($(this).scrollTop() > 40) {
 //                $(".header-area").addClass("stick-menu");
 //            } else{
 //                $(".header-area").removeClass("stick-menu");
 //            }
 //        });
 //    }


    

    

});