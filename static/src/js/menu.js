odoo.define('cenoel_backend_theme.Menu', function (require) {
    "use strict";

    var AppsMenu = require('web.AppsMenu');

    var Menu = AppsMenu.include({
        init: function () {
            var self = this;
            this._super.apply(this, arguments);
        },
        start: function () {
            var self = this;
            $('.toggle_menu_item').click(function () {
                $("#app-sidebar").toggle(150);
            });

            return this._super.apply(this, arguments);
        },
    });


    return Menu;

});
