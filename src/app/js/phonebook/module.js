/**
 * Created by ipidvir on 28.07.2016.
 */
import 'angular-ui-bootstrap';
/*lib*/
angular.module('main.templates', []);
angular.module('PhonebookApp', ['ui.bootstrap', 'main.templates']);

import {PhonebookCtrl} from './controllers/phonebookCtrl.controller.js';
import {modalWinCtrl} from './controllers/modalwinCtrl.controller.js';

import {PhonebookService} from './services/phonebook.service.js';
import {PhonebookEditService} from './services/phonebook-edit.service';

import {navMenu} from './nav-menu/nav-menu.directive.js';

/*controllers*/
angular.module('PhonebookApp').controller('PhonebookCtrl', PhonebookCtrl);
angular.module('PhonebookApp').controller('modalWinCtrl', modalWinCtrl);
/*services*/
angular.module('PhonebookApp').service('PhonebookService',  PhonebookService);
angular.module('PhonebookApp').service('PhonebookEditService', PhonebookEditService);
/*directives*/
angular.module('PhonebookApp').directive('navMenu', navMenu.createInstance);