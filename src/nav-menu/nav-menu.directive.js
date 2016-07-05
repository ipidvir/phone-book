(function (angular) {
    'use strict';
    
    angular
        .module('phonebookApp.nav-menu')
        .directive('navMenu', navMenu);

    function navMenu() {
        return {
            templateUrl: 'src/nav-menu/nav-menu.html'
        };
    }
})(angular);
