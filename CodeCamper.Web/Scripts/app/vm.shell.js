define('vm.shell',
    ['config'],
    function(config) {
        var
            currentUser = config.currentUser,
            menuHashes = config.hashes,
            activate = function(routeData) {

            },
            init = function () {
                activate();
            };
            
        init();
        return {
            currentUser: currentUser,
            menuHashes: menuHashes,
            activate: activate
        }
    });