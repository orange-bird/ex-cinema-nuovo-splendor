// jQuery
/*jslint browser: true*/
/*jslint vars: true, plusplus: true, devel: true */
/*global $, jQuery, alert, define*/

function scaleDown() {
    "use strict";

    $('.work > figure').removeClass('current').addClass('not-current');
    $('#nav > li').removeClass('current-li');
}

function show(category) {
    "use strict";

    scaleDown();

    $('#' + category).addClass('current-li');
    $('.' + category).removeClass('not-current');
    $('.' + category).addClass('current');

    if (category === "nav-default") {
        $('#nav > li').removeClass('current-li');
        $('#nav-default').addClass('current-li');
        $('.work > figure').removeClass('current, not-current');
    }
}

$(document).ready(function () {
    "use strict";

    $('#nav-default').addClass('current-li');

    $("#nav > li").hover(function () {
        show(this.id);
    }, function () {
        show('nav-default');
    });
});
