class PhonebookService {
    constructor($http){

        console.log('Service: start!!!');
        this.http = $http;
        this.listdb = {};
        this.groupdb = {};
    }
    /**************************Array*****************************************/
/*    getAllBooks() {
        console.log( "Service: getAllBooks()");
        return this.list;
    };

    getAllGroups() {
        console.log( "Service: getAllGroups()");
        return this.group;
    };
*/
    /*************************DB*********************************************/
    getAllBooksFromDB() {
        console.log( "Service: getAllBooksFromDB()");
        this.listdb = this.http.get('./data/book.json').then(function (data) {
            return data.data;
        });
        return this.listdb;
    }

    getAllGroupsFromDB() {
        console.log( "Service: getAllGroupsFromDB()");
        this.groupdb = this.http.get('./data/group.json').then(function (data) {
            return data.data;
        });
        return this.groupdb;
    }

    editBook (list, index, edBook) {
        console.log( "Edit Done(" + edBook.name + ")");
        list[index] = edBook;
        return list;
    };

    addBook(list, newBook) {
        console.log( "Add New(" + newBook.name + ")");
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
        return list;
    };

    deleteBook(list, index, delBook) {
        console.log( "Book Deleted!(" + index + ")");
        list.splice(index,1);
        return list;
    };
}
PhonebookService.$inject = ['$http'];
export {PhonebookService}

/*
(function (angular) {
    'use strict';

    angular
        .module('phonebookApp.phonebook-service')
        .service('bookService', bookService);

    bookService.$inject = ['$q'];

    function bookService($q) {
        var group = []; 
        var list = [];

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
        bookServiceClass.getAllGroups = function () {
            console.log( "bookService: getAllGroups()");
            return $q.when(group);
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
*/