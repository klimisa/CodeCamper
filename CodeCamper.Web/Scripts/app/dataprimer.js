define('dataprimer',
    ['jquery', 'dataservice', 'config'],
    function($, dataservice, config) {

        var
            fetch = function() {

                return $.Deferred(function(def) {
                    $.when(dataservice.persons.getFullPersonById(
                            config.currentUserId,
                            {
                                success: function (person) {
                                    config.currentUser(person);
                                }
                            }, true))
                        .fail(function() { def.reject(); })
                        .done(function() { def.resolve(); });
                }).promise();
            };
        return {
            fetch: fetch
        }
    });