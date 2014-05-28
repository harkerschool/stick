/* Sticky Element for The Harker School | Joe Banks */
(function ( $, window, document, undefined ) {

    var pluginName = "stick",
        defaults = {};

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            var $el = $(this.element),
                $window = $(window),
                $html = $('html'),
                stickyTop = $el.offset().top,
                stick = function() {
                    var scrollTop = $window.scrollTop();

                    if (scrollTop > stickyTop) {
                        $html.addClass('stick');
                    } else {  
                        $html.removeClass('stick');
                    }
                };

            // stick it!
            stick();
            $window.scroll( stick );
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, 
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );