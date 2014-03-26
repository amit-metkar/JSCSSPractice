(function ($) {
    $.fn.box = function (css) {
        this.css({
            "background-color": "#CCDADB",
            "border-color": "gray",
            "border-width": 2,
            "border-style": "solid",
            "padding": "15px",
            "width": "375px",
            "overflow": "auto"
        });
        if (css) {
            this.css(css);
        }
        return this;
    }
})(jQuery);