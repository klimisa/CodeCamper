define('bootstrapper',
    ['jquery', 'presenter', 'config', 'binder', 'dataprimer'],
    function($, presenter, config, binder, dataprimer) {
        var
            run = function() {
                presenter.toggleActivity(true);

                $.when(dataprimer.fetch())
                    .done(binder.bind)
                    .always(function() {
                        presenter.toggleActivity(false);
                    });
            };
        return {
            run: run
        }
    });