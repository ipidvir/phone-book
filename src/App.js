(function(angular) {
   'use strict';
   angular
      .module('phonebookApp', [
        // directives
        'phonebookApp.nav-menu',

        // services
        'phonebookApp.phonebook-service',
        'phonebookApp.phonebookEdit-service',
        
        // libs
        'ui.bootstrap'
        ]);
})(angular);
