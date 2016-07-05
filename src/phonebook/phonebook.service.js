(function (angular) {
    'use strict';

    angular
        .module('phonebookApp.phonebook-service')
        .service('bookService', bookService);

    bookService.$inject = ['$q'];

    function bookService($q) {
        var list = [
          {
            'name': 'Jean-Claude Van Damme',
            'email': 'jcvd@gmail.com',
            'image': {
                  orgn: 'img/user_profile.png',
                  thumb: 'img/user_profile_thumb.png'
               },
            'phone': '+38973332211',
            'group': 'Work',
            'enable': true,
            'id': '1'
          }, {
            'name': 'Jackie Chan',
            'email': 'jchan@gmail.com',
            'image': {
                  orgn: 'img/user_profile.png',
                  thumb: 'img/user_profile_thumb.png'
               },
            'phone': '+38639998877',
            'group': 'VIP',
            'enable': true,
            'id': '2'
          }, {
            'name': 'Taylor Swift',
            'email': 'tswift@gmail.com',
            'image': {
                  orgn: 'img/user_profile.png',
                  thumb: 'img/user_profile_thumb.png'
               },
            'phone': '+380962001030',
            'group': 'Friends',
            'enable': true,
            'id': '3'
          }, {
            'name': 'Justin Bieber',
            'email': 'jdbieber@gmail.com',
            'image': {
                  orgn: 'img/user_profile.png',
                  thumb: 'img/user_profile_thumb.png'
               },
            'phone': '+380636000001',
            'group': 'Friends',
            'enable': true,
            'id': '4'
          }, {
            'name': 'Jim Carrey',
            'email': 'jimcarrey@gmail.com',
            'image': {
                  orgn: 'img/user_profile.png',
                  thumb: 'img/user_profile_thumb.png'
               },
            'phone': '+380961234567',
            'group': 'Work',
            'enable': true,
            'id': '5'
          }, {
            'name': 'Abraham Lincoln',
            'email': 'alink@gmail.com',
            'image': {
                  orgn: 'img/user_profile.png',
                  thumb: 'img/user_profile_thumb.png'
               },
            'phone': '+380503005021',
            'group': 'Friends',
            'enable': false,
            'id': '6'
          }, {
            'name': 'Steven Spielberg',
            'email': 'ss@gmail.com',
            'phone': '+380969696966',
            'image': {
                  orgn: 'img/user_profile.png',
                  thumb: 'img/user_profile_thumb.png'
               },
            'group': 'Work',
            'enable': true,
            'id': '7'
          }, {
            'name': 'Adam Sandler',
            'email': 'adamek@gmail.com',
            'image': {
                  orgn: 'img/user_profile.png',
                  thumb: 'img/user_profile_thumb.png'
               },
            'phone': '+380965544333',
            'group': 'Family',
            'enable': true,
            'id': '8'
          }

        ];

        function bookServiceClass() {}

        bookServiceClass.getAllBooks = function () {
            console.log( "bookService: getAllBooks()");
            // var defer = $q.defer();
            //
            // setTimeout(function () {
            //     defer.resolve(list);
            // }, 10000);
            //
            // return defer.promise;

            return $q.when(list);
        };


        bookServiceClass.editBook = function (index, editBook) {
            console.log( "bookService.Edit(" + editBook.name + ")");
            list[index] = editBook;
            return $q.when(list);
        };
        bookServiceClass.addBook = function (newBook) {
            console.log( "bookService.Add()");
            if(angular.isDefined(newBook) && angular.isDefined(newBook.phone)) {
               list.push({
                  name: newBook.name, 
                  email: newBook.email, 
                  image: {
                     orgn: 'img/user_profile.png',
                     thumb: 'img/user_profile_thumb.png'
                     },
                  phone: newBook.phone, 
                  group: newBook.group,                  
                  enable: newBook.enable? true : false,
                  id: 88
                  })   
            }
            else {
               console.log( "bookService.Add Error:phone is null!!!!");              
            }
            return $q.when(list);
        };
        bookServiceClass.deleteBook = function (index, delBook) {
            console.log( "bookService.Delete(" + index + ")");
            list.splice(index,1);

            return $q.when(list);
        };


        return bookServiceClass;
    }
})(angular);
