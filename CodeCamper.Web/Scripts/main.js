(function () {
    var root = this;

//    requirejs.config(
//        {
//            // Let require.js load all app/custom modules asynchronously as needed.
//            // They are all in this folder.
//            // If we bundle this folder, this is not needed. But if we don't bundle, we need this.
//            baseUrl: 'scripts/app' /* script default location */
//
//            // List paths to js files that are not in the baseUrl and not in bundles.
//            // If we use the non-amd versions of 3rd libs we can bundle them instead.
//            // In which case we don't need the paths.
//            // Example:
//            //paths: {
//            //    'knockout.changetracker': '../lib/knockout.changetracker-amd',
//            //}
//        }
//    );
        
    define3rdPartyModules();
    loadPluginsAndBoot();

    function define3rdPartyModules() {
        // These are already loaded via bundles. 
        // We define them and put them in the root object.
        define('jquery', [], function () { return root.jQuery; });
        define('ko', [], function () { return root.ko; });
        define('amplify', [], function () { return root.amplify; });
        define('infuser', [], function () { return root.infuser; });
        define('moment', [], function () { return root.moment; });
        define('sammy', [], function () { return root.Sammy; });
        define('toastr', [], function () { return root.toastr; });
        define('underscore', [], function () { return root._; });
    }

    function loadPluginsAndBoot() {
        // Plugins must be loaded after jQuery and Knockout, 
        // since they depend on them.
        requirejs([
//                'ko.bindingHandlers',
//                'ko.debug.helpers'
        ], boot);
    }

    function boot() {
        require(['bootstrapper'], function (bs) { bs.run(); });
    }
})();