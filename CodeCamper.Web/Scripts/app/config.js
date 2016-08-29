define('config',
    ['mock/mock'],
    function(mock) {
        var
            currentUserId = 3,
            currentUser = ko.observable(),

            hashes = {
                favorites: '#/favorites',
                sessions: '#/sessions',
                speakers: '#/speakers'
            },

            title = 'Camper > ',

            viewsIds = {
                shellTop: '#shellTop-view',
                favorites: '#favorites-view'
            },

            dataserviceInit = function () { },

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
            title: title
        }
    });