(function(angular) {
    'use strict';
    angular
        .module('phonebookApp')
        .controller('modalWinCtrl', modalWinCtrl);

    modalWinCtrl.$inject = ['$scope', '$uibModalInstance', 'paramBook'];

    function modalWinCtrl($scope, $uibModalInstance, paramBook) {
        var vm = this;
        console.log('modalWinCtrl: show modal');
        vm.book = paramBook;

        vm.ok = function () {
            $uibModalInstance.close(vm.book);
            console.log('--Press "OK"');
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
            console.log('--Press "Cancel"');
        };

        vm.delete = function () {
            $uibModalInstance.close(null);
            console.log('--Press "Delete"');
        };

    }

})(angular);