define('presenter',
    ['jquery'],
    function ($) {
        var 
            toggleActivity = function (show) {
                $('#busyindicator').activity(show);
            }
        return {
            toggleActivity: toggleActivity
        }
    });