(function() {
  'use strict';

  angular
    .module('flexboxPushDrawerExample')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
