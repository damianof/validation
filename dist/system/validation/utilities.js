System.register([], function (_export) {
  var _classCallCheck, Utilities;

  return {
    setters: [],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      Utilities = (function () {
        function Utilities() {
          _classCallCheck(this, Utilities);
        }

        Utilities.getValue = function getValue(val) {
          if (val !== undefined && typeof val === 'function') {
            return val();
          }
          return val;
        };

        Utilities.isEmptyValue = function isEmptyValue(val) {
          if (val === undefined) {
            return true;
          }
          if (val === null) {
            return true;
          }
          if (val === '') {
            return true;
          }
          if (typeof val === 'string') {
            if (String.prototype.trim) {
              val = val.trim();
            } else {
              val = val.replace(/^\s+|\s+$/g, '');
            }
          }

          if (val.length !== undefined) {
            return 0 === val.length;
          }
          return false;
        };

        return Utilities;
      })();

      _export('Utilities', Utilities);

      ;
    }
  };
});