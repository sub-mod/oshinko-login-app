'use strict';

angular.module('mineApp')
    .factory('Constants', function() {
        var constants = _.clone(window.OPENSHIFT_CONSTANTS || {});
        var version = _.clone(window.OPENSHIFT_VERSION || {});
        constants.VERSION = version;
        return constants;
    });
