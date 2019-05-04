(function ($, Drupal) {
    $(document).ready(function () {
        $(".bhide").click(function () {
            $(".hideObj").slideDown();
            $(this).hide(); //.attr()
            return false;
        });
        $(".bhide2").click(function () {
            $(".container.hideObj2").slideDown();
            $(this).hide(); // .attr()
            return false;
        });
        $('.heart').mouseover(function () {
            $(this).find('i').removeClass('fa-heart-o').addClass('fa-heart');
        }).mouseout(function () {
            $(this).find('i').removeClass('fa-heart').addClass('fa-heart-o');
        });
        function sdf_FTS(_number, _decimal, _separator)
        {
            var decimal = (typeof (_decimal) != 'undefined') ? _decimal : 2;
            var separator = (typeof (_separator) != 'undefined') ? _separator : '';
            var r = parseFloat(_number)
            var exp10 = Math.pow(10, decimal);
            r = Math.round(r * exp10) / exp10;
            rr = Number(r).toFixed(decimal).toString().split('.');
            b = rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1" + separator);
            r = (rr[1] ? b + '.' + rr[1] : b);

            return r;
        }
        setTimeout(function () {
            $('#counter').text('0');
            $('#counter1').text('0');
            $('#counter2').text('0');
            setInterval(function () {
                var curval = parseInt($('#counter').text());
                var curval1 = parseInt($('#counter1').text().replace(' ', ''));
                var curval2 = parseInt($('#counter2').text());
                if (curval <= 707) {
                    $('#counter').text(curval + 1);
                }
                if (curval1 <= 12280) {
                    $('#counter1').text(sdf_FTS((curval1 + 20), 0, ' '));
                }
                if (curval2 <= 245) {
                    $('#counter2').text(curval2 + 1);
                }
            }, 2);

        }, 500);
    });

    jQuery(document).ready(function () {
        jQuery('#menu').slicknav();
    });

    $(document).ready(function () {
        var $menu = $("#menuF");
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
                $menu.fadeOut('fast', function () {
                    $(this).removeClass("default")
                        .addClass("fixed transbg")
                        .fadeIn('fast');
                });
            } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast', function () {
                    $(this).removeClass("fixed transbg")
                        .addClass("default")
                        .fadeIn('fast');
                });
            }
        });
    });
    jQuery(document).ready(function () {
        jQuery(".pretty a[rel^='prettyPhoto']").prettyPhoto({animation_speed: 'normal', theme: 'light_square', slideshow: 3000, autoplay_slideshow: true, social_tools: ''});
    });
    /**
     * Forward port jQuery.live()
     * Wrapper for newer jQuery.on()
     * Uses optimized selector context
     * Only add if live() not already existing.
     */
    if (typeof jQuery.fn.live == 'undefined' || !(jQuery.isFunction(jQuery.fn.live))) {
        jQuery.fn.extend({
            live: function (event, callback) {

                if (this.selector) {
                    jQuery(document).on(event, this.selector, callback);
                }
            }
        });
    }
    $(document).ready(function () {
        $(".filter-button").click(function () {
            var value = $(this).attr('data-filter');
            if (value == "all")
            {
                $('.filter').show('1000');
            }
            else
            {
                $(".filter").not('.' + value).hide('3000');
                $('.filter').filter('.' + value).show('3000');

            }
        });
        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
        $(this).addClass("selected");
    });

    (function ($) {
        "use strict"; // Start of use strict
        // Smooth scrolling using jQuery easing
        $('a.is-active[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $(this).closest('ul').find('li').removeClass('active')
                    $(this).closest('li').removeClass('active').addClass('active');
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 54)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });
        // Closes responsive menu when a scroll trigger link is clicked
        $('.is-active').click(function () {
            //$('.navmenu').collapse('hide');
        });
        $('#camera_wrap_1').camera({
            transPeriod: 500,
            time: 3000,
            height: '490px',
            thumbnails: false,
            pagination: true,
            playPause: false,
            loader: false,
            navigation: false,
            hover: false
        });
    }); // End of use strict
})(jQuery, Drupal);