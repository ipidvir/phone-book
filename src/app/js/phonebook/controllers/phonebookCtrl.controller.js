import 'underscore';

class PhonebookCtrl {
   constructor($scope, $uibModal, $filter, $http, PhonebookService, PhonebookEditService){
      console.log('Controller: start!!!');

      this.init();
      this.initData(PhonebookService, PhonebookEditService);
      var vm = this;
      vm.pbService = PhonebookService;
      vm.pbEditService = PhonebookEditService;
   }

   init() {
      console.log('Controller: init()');
      this.title = 'phonebookCtrl';
   }

   initData(PhonebookService, PhonebookEditService) {
      console.log('Controller: initData()');
      var vm = this;

      PhonebookService.getAllBooksFromDB('./data/book.json').then(function (data) {
         if (data !== null) {
            vm.phonebookList = data;
         }
      });

      PhonebookService.getAllGroupsFromDB('./data/group.json').then(function (data) {
         if (data !== null) {
            vm.phonebookGroup = data;

         }
      });

   }

   openModalWin(index, book) {
      var vm = this;
      var modalInstance = vm.pbEditService.create(book);

      if(book != null) {
         modalInstance.result.then(function (editedBook) {
            vm.phonebookList = vm.pbService.editBook(vm.phonebookList, index, editedBook);
         });
      }
      else {
         modalInstance.result.then(function (editedBook) {
            vm.phonebookList = vm.pbService.addBook(vm.phonebookList, editedBook);
         });
      }

   }

   delModalWin (index, book) {
      var vm = this;
      var modalInstance = vm.pbEditService.delete(book);

      modalInstance.result.then(function (paramBook) {
         vm.phonebookList = vm.pbService.deleteBook(vm.phonebookList, index, paramBook);
      });
   }

}

PhonebookCtrl.$inject = ['$scope', '$uibModal', '$filter', '$http', 'PhonebookService', 'PhonebookEditService'];
export {PhonebookCtrl}

/*
 (function(angular) {
 'use strict';
 angular
 .module('phonebookApp')
 .controller('phonebookCtrl', phonebookCtrl);

 phonebookCtrl.$inject = ['$scope', '$uibModal', 'bookService', 'bookEditService'];

 unction phonebookCtrl($scope, $uibModal, bookService, bookEditService) {
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
*/
