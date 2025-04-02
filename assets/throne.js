(function($) {

    $('.login-trigger').on('click', function() {

        $('.login-dropdown').css({
            display: 'block',
            position: 'absolute',
            bottom: '-100'
        });

        console.log('Login dropdown triggered');

    });

})(jQuery);