(function ($) {
    $(function () {
        $('.sidebar-toggle').on('click', function () {
            $('#site-wrapper').toggleClass('pushed');
            $('#sidebar').toggleClass('pushed');
        });

    });
})(jQuery);