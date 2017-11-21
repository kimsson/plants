'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('../config.js');

var _config2 = _interopRequireDefault(_config);

var _RealtimeIO = require('./../utils/RealtimeIO');

var _RealtimeIO2 = _interopRequireDefault(_RealtimeIO);

var _reactMoment = require('react-moment');

var _reactMoment2 = _interopRequireDefault(_reactMoment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kim.eriksson/Documents/kimsson/plants/components/PlantsLogs.js';


var LOG_INTERVAL = 60000;

var PlantsLogs = function (_Component) {
  (0, _inherits3.default)(PlantsLogs, _Component);

  function PlantsLogs(props) {
    (0, _classCallCheck3.default)(this, PlantsLogs);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PlantsLogs.__proto__ || (0, _getPrototypeOf2.default)(PlantsLogs)).call(this, props));

    _this.state = {
      sensors: [],
      logs: []
    };
    _this.setLog = _this.setLog.bind(_this);
    _this.getLog = _this.getLog.bind(_this);
    _this.getSensorData = _this.getSensorData.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(PlantsLogs, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.interval = setInterval(this.setLog, LOG_INTERVAL)
      this.getSensorData();
    }
  }, {
    key: 'getSensorData',
    value: function getSensorData() {
      var _this2 = this;

      var sensors = [];
      // RealtimeIO.load('sensors', function (snapshot) {
      _RealtimeIO2.default.load('sensors', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          var item = childSnapshot;

          sensors.push(item);
        });
        _this2.setState({ sensors: sensors });
        _this2.setLog();
      });
    }
  }, {
    key: 'setLog',
    value: function setLog() {
      var _this3 = this;

      var d = new Date();
      d = d.toLocaleString();
      d = d.replace(/,/g, "");
      if (!this.state.sensors) return;
      _RealtimeIO2.default.set('logs/' + new Date(), (0, _stringify2.default)(this.state.sensors));
      var logs = [];
      _RealtimeIO2.default.load('logs', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          var item = childSnapshot;

          logs.push(item);
        });
        _this3.setState({ logs: logs });
        _this3.getLog();
      });
    }
  }, {
    key: 'getLog',
    value: function getLog() {
      var logs = this.state.logs.map(function (item, idx) {
        var log = {
          date: item.key,
          log: JSON.parse(item.val())
        };
        return log;
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'logs');
    }
  }]);

  return PlantsLogs;
}(_react.Component);

exports.default = PlantsLogs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxhbnRzTG9ncy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbmZpZyIsIlJlYWx0aW1lSU8iLCJNb21lbnQiLCJMT0dfSU5URVJWQUwiLCJQbGFudHNMb2dzIiwicHJvcHMiLCJzdGF0ZSIsInNlbnNvcnMiLCJsb2dzIiwic2V0TG9nIiwiYmluZCIsImdldExvZyIsImdldFNlbnNvckRhdGEiLCJsb2FkIiwic25hcHNob3QiLCJmb3JFYWNoIiwiY2hpbGRTbmFwc2hvdCIsIml0ZW0iLCJwdXNoIiwic2V0U3RhdGUiLCJkIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwicmVwbGFjZSIsInNldCIsIm1hcCIsImlkeCIsImxvZyIsImRhdGUiLCJrZXkiLCJKU09OIiwicGFyc2UiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGVBQU4sQUFBcUI7O0lBRWYsQTtzQ0FDSjs7c0JBQUEsQUFBYSxPQUFPO3dDQUFBOzs4SUFBQSxBQUNYLEFBQ1A7O1VBQUEsQUFBSztlQUFRLEFBQ0YsQUFDVDtZQUZGLEFBQWEsQUFFTCxBQUVSO0FBSmEsQUFDWDtVQUdGLEFBQUssU0FBUyxNQUFBLEFBQUssT0FBTCxBQUFZLEtBQTFCLEFBQ0E7VUFBQSxBQUFLLFNBQVMsTUFBQSxBQUFLLE9BQUwsQUFBWSxLQUExQixBQUNBO1VBQUEsQUFBSyxnQkFBZ0IsTUFBQSxBQUFLLGNBQUwsQUFBbUIsS0FSdEIsQUFRbEI7V0FDRDs7Ozs7eUNBR3FCLEFBRXJCOzs7d0NBQ29CLEFBQ25CO0FBQ0E7V0FBQSxBQUFLLEFBQ047Ozs7b0NBQ2dCO21CQUNmOztVQUFJLFVBQUosQUFBYyxBQUNkO0FBQ0E7MkJBQUEsQUFBVyxLQUFYLEFBQWdCLFdBQVcsVUFBQSxBQUFDLFVBQWEsQUFDdkM7aUJBQUEsQUFBUyxRQUFRLFVBQUEsQUFBUyxlQUFlLEFBQ3JDO2NBQUksT0FBSixBQUFXLEFBRVg7O2tCQUFBLEFBQVEsS0FBUixBQUFhLEFBQ2hCO0FBSkQsQUFLQTtlQUFBLEFBQUssU0FBUyxFQUFDLFNBQWYsQUFBYyxBQUFVLEFBQ3hCO2VBQUEsQUFBSyxBQUVOO0FBVEQsQUFXRDs7Ozs2QkFDUzttQkFDUjs7VUFBSSxJQUFHLElBQVAsQUFBTyxBQUFJLEFBQ1g7VUFBRSxFQUFGLEFBQUUsQUFBRSxBQUNKO1VBQUUsRUFBQSxBQUFFLFFBQUYsQUFBVyxNQUFiLEFBQUUsQUFBaUIsQUFDbkI7VUFBRyxDQUFDLEtBQUEsQUFBSyxNQUFULEFBQWUsU0FBUyxBQUN4QjsyQkFBQSxBQUFXLElBQUksVUFBVSxJQUF6QixBQUF5QixBQUFJLFFBQVEseUJBQWUsS0FBQSxBQUFLLE1BQXpELEFBQXFDLEFBQTBCLEFBQy9EO1VBQUksT0FBSixBQUFXLEFBQ1g7MkJBQUEsQUFBVyxLQUFYLEFBQWdCLFFBQVEsVUFBQSxBQUFDLFVBQWEsQUFDcEM7aUJBQUEsQUFBUyxRQUFRLFVBQUEsQUFBUyxlQUFlLEFBQ3JDO2NBQUksT0FBSixBQUFXLEFBRVg7O2VBQUEsQUFBSyxLQUFMLEFBQVUsQUFDYjtBQUpELEFBS0E7ZUFBQSxBQUFLLFNBQVMsRUFBQyxNQUFmLEFBQWMsQUFBTyxBQUNyQjtlQUFBLEFBQUssQUFDTjtBQVJELEFBU0Q7Ozs7NkJBQ1EsQUFDUDtVQUFNLFlBQU8sQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixJQUFJLFVBQUEsQUFBUyxNQUFULEFBQWUsS0FBSSxBQUNsRDtZQUFJO2dCQUNJLEtBREUsQUFDRyxBQUNYO2VBQUssS0FBQSxBQUFLLE1BQU0sS0FGbEIsQUFBVSxBQUVILEFBQVcsQUFBSyxBQUV2QjtBQUpVLEFBQ1I7ZUFHRixBQUFRLEFBQ1Q7QUFORCxBQUFhLEFBT2QsT0FQYzs7Ozs2QkFTTCxBQUVSOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQSxFQURGLEFBQ0UsQUFFSDs7Ozs7QUFuRXNCLEEsQUFxRXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlBsYW50c0xvZ3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tpbS5lcmlrc3Nvbi9Eb2N1bWVudHMva2ltc3Nvbi9wbGFudHMifQ==