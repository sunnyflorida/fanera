(function($) {
    $(function() {
        var jcarousel = $('.jcarousel1');

        jcarousel
            .on('jcarousel1:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

                if (width >= 600) {
                    width = width / 4;
                } else if (width >= 350) {
                    width = width / 3;
                }

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel1-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel1-control-next')
            .jcarouselControl({
                target: '+=1'
            });
    });
})(jQuery);

(function($) {
    $(function() {
        var jcarousel = $('.jcarousel_p');

        jcarousel
            .on('jcarousel_p:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 3;
                }

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel_p-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel_p-control-next')
            .jcarouselControl({
                target: '+=1'
            });
    });
})(jQuery);

(function($) {
    $(function() {
        var jcarousel = $('.jcarousel_b');

        jcarousel
            .on('jcarousel_b:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

                if (width >= 600) {
                    width = width / 5;
                } else if (width >= 350) {
                    width = width / 3;
                }

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel_b-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel_b-control-next')
            .jcarouselControl({
                target: '+=1'
            });
    });
})(jQuery);

