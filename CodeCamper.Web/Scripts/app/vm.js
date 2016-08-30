define('vm',
    ['vm.shell', 'vm.favorites'],
    function (shell, favorites) {
        return {
            shell: shell,
            favorites: favorites
        }
    });