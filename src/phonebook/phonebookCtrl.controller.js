(function(angular) {
   'use strict';
   angular
      .module('phonebookApp')
      .controller('phonebookCtrl', phonebookCtrl);

   phonebookCtrl.$inject = ['$scope', '$uibModal', 'bookService', 'bookEditService'];

   /* @ngInject */
   function phonebookCtrl($scope, $uibModal, bookService, bookEditService) {
      var vm = this;
      console.log('bookCtrl: start!!!');
      vm.title = 'phonebookCtrl';
      //vm.searchQuery = '';
      //vm.reverseSort = false;

      bookService.getAllBooks().then(function (response) {
         console.log('bookCtrl: call getAllBooks()');
         vm.phonebookList = response;
      });

      bookService.getAllGroups().then(function (response) {
         console.log('bookCtrl: call getAllGroups()');
         vm.groupList = response;
      });


      vm.openModalWin = function (index, book) {
         var modalInstance = bookEditService.edit(book);

         modalInstance.result.then(function (paramBook, groupList) {
            //console.log('bookCtrl:paramBook=' + paramBook);
            //console.log('bookCtrl:index=' + index);
            if (index >= 0) {
               bookService.editBook(index, paramBook).then(function (response) {
                  console.log('bookCtrl: call EDIT()');
                  vm.phonebookList = response;
               });   
            } else {
               bookService.addBook(paramBook).then(function (response) {
                  console.log('bookCtrl: call ADD()');
                  vm.phonebookList = response;
               });   
            }
         });
      }

      vm.delModalWin = function (index, book) {
         var modalInstance = bookEditService.delete(book);

         modalInstance.result.then(function (paramBook, groupList) {
            if (index >= 0) {
               bookService.deleteBook(index, paramBook).then(function (response) {
               console.log('bookCtrl: call DELETE()');
                  vm.phonebookList = response;
               });   
            } else {
            }
         });
      }
       
      vm.modalGroupList = function (groupid) {
         return vm.groupList[groupid];
      };
      

   }

})(angular);