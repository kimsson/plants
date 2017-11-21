'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _config = require('../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RealtimeIO = function () {
  function RealtimeIO() {
    (0, _classCallCheck3.default)(this, RealtimeIO);

    this.init();
  }

  (0, _createClass3.default)(RealtimeIO, [{
    key: 'init',
    value: function init() {
      console.log('Firebase init', _config2.default.firebase);
      if (!_firebase2.default.apps.length) {
        this.firebase = _firebase2.default.initializeApp(_config2.default.firebase);
        this.connect();
      }
    }
  }, {
    key: 'connect',
    value: function connect() {
      _firebase2.default.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log('User already signed in.');
        } else {
          console.log('Sign in...');
          _firebase2.default.auth().signInAnonymously().catch(function (error) {
            console.log('error', error);
          });
        }
      });
    }
  }, {
    key: 'load',
    value: function load(ref, callback) {
      this.firebase.database().ref(ref).once('value').then(callback);
    }

    // Sets the key automatically

  }, {
    key: 'push',
    value: function push(ref, object, callback) {
      this.firebase.database().ref(ref).push(object).then(callback);
    }

    // Key is expected in the refs

  }, {
    key: 'set',
    value: function set(ref, object, callback) {
      this.firebase.database().ref(ref).set(object).then(callback);
    }

    // Key is expected in the refs

  }, {
    key: 'update',
    value: function update(ref, object, callback) {
      this.firebase.database().ref(ref).update(object).then(callback);
    }
  }, {
    key: 'listen',
    value: function listen(event, ref, callback) {
      this.firebase.database().ref(ref).on(event, callback);
    }
  }]);

  return RealtimeIO;
}();

exports.default = new RealtimeIO();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL1JlYWx0aW1lSU8uanMiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJjb25maWciLCJSZWFsdGltZUlPIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImNvbm5lY3QiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInNpZ25JbkFub255bW91c2x5IiwiY2F0Y2giLCJlcnJvciIsInJlZiIsImNhbGxiYWNrIiwiZGF0YWJhc2UiLCJvbmNlIiwidGhlbiIsIm9iamVjdCIsInB1c2giLCJzZXQiLCJ1cGRhdGUiLCJldmVudCIsIm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUDs7OztBQUNBLEFBQU8sQUFBUCxBQUFtQixBQUFuQjs7Ozs7O0lBRU0sQSx5QkFFSjt3QkFBZTt3Q0FDYjs7U0FBSyxBQUFMLEFBQ0Q7Ozs7OzJCQUVPLEFBQ047Y0FBUSxBQUFSLElBQVksQUFBWixpQkFBNkIsaUJBQU8sQUFBcEMsQUFDQTtVQUFJLENBQUMsbUJBQVMsQUFBVCxLQUFjLEFBQW5CLFFBQTJCLEFBQ3pCO2FBQUssQUFBTCxXQUFnQixtQkFBUyxBQUFULGNBQXVCLGlCQUFPLEFBQTlCLEFBQWhCLEFBQ0E7YUFBSyxBQUFMLEFBQ0Q7QUFDRjs7Ozs4QkFFVSxBQUNUO3lCQUFTLEFBQVQsT0FBZ0IsQUFBaEIsbUJBQW1DLFVBQUMsQUFBRCxNQUFVLEFBQzNDO1lBQUksQUFBSixNQUFVLEFBQ1I7a0JBQVEsQUFBUixJQUFZLEFBQVosQUFDRDtBQUZELGVBRU8sQUFDTDtrQkFBUSxBQUFSLElBQVksQUFBWixBQUNBOzZCQUFTLEFBQVQsT0FBZ0IsQUFBaEIsb0JBQW9DLEFBQXBDLE1BQTBDLFVBQVUsQUFBVixPQUFpQixBQUN6RDtvQkFBUSxBQUFSLElBQVksQUFBWixTQUFxQixBQUFyQixBQUNEO0FBRkQsQUFHRDtBQUNGO0FBVEQsQUFVRDs7Ozt5QkFFSyxBLEtBQUssQSxVQUFVLEFBQ25CO1dBQUssQUFBTCxTQUFjLEFBQWQsV0FDYyxBQURkLElBQ2tCLEFBRGxCLEtBRWMsQUFGZCxLQUVtQixBQUZuQixTQUdjLEFBSGQsS0FHbUIsQUFIbkIsQUFJRDtBQUVEOzs7Ozs7eUJBQ00sQSxLQUFLLEEsUUFBUSxBLFVBQVUsQUFDM0I7V0FBSyxBQUFMLFNBQWMsQUFBZCxXQUNjLEFBRGQsSUFDa0IsQUFEbEIsS0FFYyxBQUZkLEtBRW1CLEFBRm5CLFFBR2MsQUFIZCxLQUdtQixBQUhuQixBQUlEO0FBRUQ7Ozs7Ozt3QkFDSyxBLEtBQUssQSxRQUFRLEEsVUFBVSxBQUMxQjtXQUFLLEFBQUwsU0FBYyxBQUFkLFdBQ2MsQUFEZCxJQUNrQixBQURsQixLQUVjLEFBRmQsSUFFa0IsQUFGbEIsUUFHYyxBQUhkLEtBR21CLEFBSG5CLEFBSUQ7QUFFRDs7Ozs7OzJCQUNRLEEsS0FBSyxBLFFBQVEsQSxVQUFVLEFBQzdCO1dBQUssQUFBTCxTQUFjLEFBQWQsV0FDYyxBQURkLElBQ2tCLEFBRGxCLEtBRWMsQUFGZCxPQUVxQixBQUZyQixRQUdjLEFBSGQsS0FHbUIsQUFIbkIsQUFJRDs7OzsyQkFHTyxBLE9BQU8sQSxLQUFLLEEsVUFBVSxBQUM1QjtXQUFLLEFBQUwsU0FBYyxBQUFkLFdBQ2MsQUFEZCxJQUNrQixBQURsQixLQUVjLEFBRmQsR0FFaUIsQUFGakIsT0FFd0IsQUFGeEIsQUFHRDs7Ozs7QUFHSDs7a0JBQWUsSUFBSSxBQUFKLEFBQWYiLCJmaWxlIjoiUmVhbHRpbWVJTy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2ltLmVyaWtzc29uL0RvY3VtZW50cy9raW1zc29uL3BsYW50cyJ9