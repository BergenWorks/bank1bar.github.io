(function ($) {
    $(function () {
        /**
         * Setup sidebar menu toggle
         */
        $('.open-sidebar').on('click', function () {
            $('#sidebar').addClass('open');
        });

        $('.close-sidebar').on('click', function () {
            $('#sidebar').removeClass('open');
        });

        /**
         * Setup toggle on menu groups
         */
        $('.menu-group-title').on('click', function () {
            $next = $(this).next('.menu-group');

            if ($next.css('display') == 'none') {
                $next.show('400');
                $(this).addClass('open');
            }
            else {
                $next.hide('400');
                $(this).removeClass('open');
            }

        })

    });
})(jQuery);