define('vm.favorites',
    ['ko', 'group'],
    function(ko, group) {
        var
            timeslots = ko.observableArray(),
            days = ko.computed(function() {
                group.timeslotsDays(timeslots());
            });

        return {
            timeslots:timeslots,
            days: days
        }
    })