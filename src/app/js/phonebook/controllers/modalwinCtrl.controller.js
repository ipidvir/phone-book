class modalWinCtrl {
    constructor($scope, $uibModalInstance, mdBook){
        console.log('ModalWin: start!!!');
        //var vm = this;
        this.book = mdBook;
        this.modal = $uibModalInstance;
    }

    init() {
        console.log('ModalWin: init()');
    };

    ok() {
        console.log('--Press "OK"');
        return this.modal.close(this.book);
    };

    cancel() {
        console.log('--Press "Cancel"');
        return this.modal.dismiss('cancel');
    };

    delete(){
        console.log('--Press "Delete"');
        return this.modal.close(null);
    };


}
modalWinCtrl.$inject = ['$scope', '$uibModalInstance', 'mdBook'];
export {modalWinCtrl}

/*
(function(angular) {
    'use strict';
    angular
        .module('phonebookApp')
        .controller('modalWinCtrl', modalWinCtrl);

    modalWinCtrl.$inject = ['$scope', '$uibModalInstance', 'paramBook', 'groupList'];

    function modalWinCtrl($scope, $uibModalInstance, paramBook, groupList) {
        var vm = this;
        console.log('modalWinCtrl: show modal');
        vm.book = paramBook;
        vm.groupList = groupList;

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
*/