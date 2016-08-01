
class navMenu {
    constructor($templateCache) {
        /*this.restrict = 'E';
        this.template = $templateCache.get('phonebook/nav-menu/nav-menu.html');
        this.scope = {};*/
        console.log('navMenu: Directive start!');
        var vm = this;
        vm.restrict = 'E';
        vm.template = $templateCache.get('phonebook/nav-menu/nav-menu.html');
        /*vm.scope = {};*/

    }
    static createInstance($templateCache) {
        navMenu.instance = new navMenu($templateCache);
        return navMenu.instance;
    }

}
navMenu.createInstance.$inject = ['$templateCache'];
export {navMenu}

/*
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
*/