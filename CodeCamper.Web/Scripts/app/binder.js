define('binder',
    ['jquery', 'ko', 'config', 'vm'],
    function($, ko, config, vm) {
        var
            ids = config.viewsIds,
            getView = function(viewName) {
                return $(viewName).get(0);
            },
            bind = function () {
                ko.applyBindings(vm.shell, getView(ids.shellTop));
            }
        return {
            bind: bind
        };
    });