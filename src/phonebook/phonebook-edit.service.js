(function (angular) {
    'use strict';

    angular
        .module('phonebookApp.phonebookEdit-service')
        .service('bookEditService', bookEditService);

    bookEditService.$inject = ['$uibModal'];

    function bookEditService($uibModal) {
      var modalWindow = {};

      modalWindow.edit = function (book, groupList) {
         return $uibModal.open({
            animation: true,
            templateUrl:  './tmpl_html/editBook.htm',
            controller:   'modalWinCtrl',
            controllerAs: 'editBookForm',
            resolve: {
               paramBook: function () {
                  return angular.copy(book);
                  },
               groupList: function () {
                  return groupList;
                  }
               }
            });

        };

      modalWindow.delete = function (book, groupList) {
         return $uibModal.open({
            animation: true,
            templateUrl:  './tmpl_html/deleteBook.htm',
            controller:   'modalWinCtrl',
            controllerAs: 'deleteBookForm',
            resolve: {
               paramBook: function () {
                  return angular.copy(book);
                  },
               groupList: function () {
                  return groupList;
                  }
               }
            });

        };


        return modalWindow;
    }
})(angular);