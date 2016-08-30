define('route-config',
    ['router', 'vm', 'config'],
    function (router, vm, config) {
        var
        logger = config.logger,
        register = function() {
            var routeData = [

                // Favorites routes
                {
                    view: config.viewsIds.favorites,
                    routes: [
                        {
                            isDefault: true,
                            route: config.hashes.favorites,
                            title: 'Favorites',
                            callback: vm.favorites.activate,
                            group: '.route-top'
                        }, {
                            route: config.hashes.favoritesByDate + '/:date',
                            title: 'Favorites',
                            callback: vm.favorites.activate,
                            group: '.route-left'
                        }
                    ]
                }
            ];

            for (var i = 0; i < routeData.length; i++) {
                router.register(routeData[i]);
            }

            router.run();
        };


        return {
            register: register
        }
    });