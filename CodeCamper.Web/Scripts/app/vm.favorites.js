define('vm.favorites',
    ['ko', 'group'],
    function(ko, group) {
        var
            timeslots = ko.observableArray(),
            days = ko.computed(function() {
                return group.timeslotsDays(timeslots());
            }),
            activate = function (routeData) {

            };
            
        return {
            timeslots:timeslots,
            days: days,
            activate: activate
        }
    })