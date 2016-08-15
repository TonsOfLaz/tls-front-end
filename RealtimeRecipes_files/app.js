// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    });

  $(document).ready(function() {
    $('.timeline-image').each(function() {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1]
        },
      });
    });
  });
  
})(jQuery);

// Countdown timer

jQuery(function($) {

  var paused;
  var countdown;
  
  function startTimer(duration, display, step) {
    var timer = duration;
    var minutes;
    var seconds;
    countdown = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);
      display.append("<p>" + step + "</p>");
      display.append("<div class='close-modal'><div class='lr'><div class='rl'</div></div></div>");

      if (--timer < 0) {
        clearInterval(countdown);
        var snd = new Audio("https://s3-us-west-2.amazonaws.com/realtimerecipesimages/public/ding.mp3");
        snd.play();
      }
    }, 1000);
  }

  $('.start-timer').on('click',function() {
    if (countdown) {
      clearInterval(countdown);
    }
    paused = false;
    $('#countdown-timer').remove();
    $('body').append("<div id='countdown-timer' class='btn btn-xl'></div>");
    var mins = parseInt($(this).find('.mins').html());
    var secs = parseInt($(this).find('.secs').html());
    var step = $(this).siblings('.timeline-heading').find('h4').html();
    var time = (mins*60) + (secs);
    var display = $('#countdown-timer');
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
    $('#countdown-timer').css('display', 'inline-block');
    display.text(mins + ":" + secs);
    display.append("<p>" + step + "</p>");
    display.append("<div class='close-modal'><div class='lr'><div class='rl'</div></div></div>");
    startTimer(time, display, step);
  });
  
  $('body').on('click', '#countdown-timer .close-modal', function(){
    $('#countdown-timer').fadeOut();
    clearInterval(countdown);
    countdown = null;
  });
  
  $('body').on('click', '#countdown-timer',function(){
    if (paused) {
      var timer = $(this).text().split(':');
      var step = $(this).find('p').html();
      startTimer(Number(timer[0] * 60) + parseInt(timer[1]), $('#countdown-timer'), step);
      paused = false;
    } else {
      clearInterval(countdown);
      paused = true;
    }
  });
  
});

