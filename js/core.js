(function ($) {
    $(function () {
        $('.open-sidebar').on('click', function () {
            $('#sidebar').addClass('open');
        });

        $('.close-sidebar').on('click', function () {
            $('#sidebar').removeClass('open');
        });

    });
})(jQuery);