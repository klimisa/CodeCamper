define('bootstrapper',
    ['jquery', 'presenter', 'config', 'binder', 'dataprimer', 'route-config'],
    function ($, presenter, config, binder, dataprimer, routeConfig) {
        var
            run = function() {
                presenter.toggleActivity(true);

                $.when(dataprimer.fetch())
                    .done(binder.bind)
                    .done(routeConfig.register)
                    .always(function() {
                        presenter.toggleActivity(false);
                    });
            };
        return {
            run: run
        }
    });