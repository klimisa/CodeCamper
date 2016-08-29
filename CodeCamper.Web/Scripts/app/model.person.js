define('model.person',
    ['ko'],
    function(ko) {
        var
            settings = {
                imageBasePath: '../content/images/photos/',
                unknownPersonImageSource: 'unknown_person.jpg',
                twitterUrl: 'http://twitter.com/',
                twitterRegEx: /[@]([A-Za-z0-9_]{1,15})/i,
                urlRegEx: /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i
            },
            person = function() {
                var self = this;
                self.id = ko.observable();
                self.firstName = ko.observable().extend({ required: true });
                self.lastName = ko.observable().extend({ required: true });
                self.fullName = ko.computed(function () {
                    return self.firstName() + ' ' + self.lastName();
                }, self);
                self.imageSource = ko.observable();
                self.imageName = ko.computed(function() {
                    var source = self.imageSource();
                    if (!source) {
                        source = settings.unknownPersonImageSource;
                    }
                    return settings.imageBasePath + source;
                }, self);

                return self;
            }
        return person;
    });