define('config',
    ['mock/mock', 'toastr'],
    function(mock, toastr) {
        var
            currentUserId = 3,
            currentUser = ko.observable(),
            logger = toastr,

            hashes = {
                favorites: '#/favorites',
                favoritesByDate: '#/favorites/date',
                sessions: '#/sessions',
                speakers: '#/speakers'
            },

            title = 'Camper > ',

            viewsIds = {
                shellTop: '#shellTop-view',
                favorites: '#favorites-view'
            },

            toasts = {
                changesPending: 'Please save or cancel your changes before leaving the page.',
                errorSavingData: 'Data could not be saved. Please check the logs.',
                errorGettingData: 'Could not retrieve data.  Please check the logs.',
                invalidRoute: 'Cannot navigate. Invalid route',
                retreivedData: 'Data retrieved successfully',
                savedData: 'Data saved successfully'
            },

            dataserviceInit = function() {},

            _useMocks = false,
            init = function() {
                if (_useMocks) {
                    dataserviceInit = mock.dataserviceInit;
                }
                dataserviceInit();
            }

        init();
        return {
            currentUserId: currentUserId,
            currentUser: currentUser,
            hashes: hashes,
            viewsIds: viewsIds,
            title: title,
            logger: logger,
            toasts: toasts,
            window: window
        }
    });