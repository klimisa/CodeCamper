define('dataservice.persons',
    ['config'],
    function(config) {
        var
            init = function () {
                amplify.request.define('person', 'ajax', {
                    url: '/codecamper/api/persons/{id}',
                    dataType: 'json',
                    type: 'GET'
                    //cache:
                });
            },

            getPerson = function(callbacks, id) {
                return amplify.request({
                    resourceId: 'person',
                    data: { id: id },
                    success: callbacks.success,
                    error: callbacks.error
                });
            };

        init();
        return {
            getPerson: getPerson
        }
    });