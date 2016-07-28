(function() {
  'use strict';

  angular
    .module('flexboxPushDrawerExample')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $log) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1469672664319;
    vm.showToastr = showToastr;

    activate();

    vm.g = false;

    vm.pageClicked = function () {

    $log.log('Clickedvvv!');



      vm.g = !vm.g;
      var r = $('#right-column');

      if (vm.g === true) {
        TweenLite.to(r, .1, {flex: 'none'});
        TweenLite.to(r, 1, {width:0, ease: Power1.easeOut});

      } else {
        TweenLite.to(r, 1, {width:200});

      }


    };


    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
