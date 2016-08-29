define('dataservice',
    ['jquery', 'dataservice.persons', 'model'],
    function($, persons, model) {
        persons.getFullPersonById = function (id, callbacks, refresh) {
            return $.Deferred(function(def) {
                persons.getPerson(
                {
                    success: function(dto) {
                        var person = new model.Person().id(dto.id);
                        person.firstName(dto.firstName)
                            .lastName(dto.lastName)
                            .imageSource(dto.imageSource);
                        callbacks.success(person);
                        def.resolve(dto);
                    },
                    error: function (response) {
                        //logger.error('oops! could not retrieve person ' + id);
                        if (callbacks && callbacks.error) { callbacks.error(response); }
                        def.reject(response);
                    }
                }, id);
            }).promise();
        }
        return {
            persons: persons
        }
    });