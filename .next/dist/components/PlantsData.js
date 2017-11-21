'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactD3Speedometer = require('react-d3-speedometer');

var _reactD3Speedometer2 = _interopRequireDefault(_reactD3Speedometer);

var _RealtimeIO = require('./../utils/RealtimeIO');

var _RealtimeIO2 = _interopRequireDefault(_RealtimeIO);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _List = require('material-ui/List');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _grade = require('material-ui/svg-icons/action/grade');

var _grade2 = _interopRequireDefault(_grade);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kim.eriksson/Documents/kimsson/plants/components/PlantsData.js';


var PlantsData = function (_Component) {
  (0, _inherits3.default)(PlantsData, _Component);

  function PlantsData(props) {
    (0, _classCallCheck3.default)(this, PlantsData);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PlantsData.__proto__ || (0, _getPrototypeOf2.default)(PlantsData)).call(this, props));

    _this.state = {
      sensors: [],
      relays: [],
      autoControlls: false
    };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.getSensorData = _this.getSensorData.bind(_this);
    _this.getRelaysData = _this.getRelaysData.bind(_this);
    _this.updateSensorData = _this.updateSensorData.bind(_this);
    _this.findArrayElementByTitle = _this.findArrayElementByTitle.bind(_this);
    _this.formatString = _this.formatString.bind(_this);

    _this.interval;
    return _this;
  }

  (0, _createClass3.default)(PlantsData, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('PlantsData will mount');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('PlantsData did mount');

      this.getRelaysData();
      this.getSensorData();
      this.updateSensorData();
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      clearInterval(this.interval);
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
      });
    }
  }, {
    key: 'getRelaysData',
    value: function getRelaysData() {
      var _this3 = this;

      var relays = [];
      _RealtimeIO2.default.load('relays', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          var item = childSnapshot;

          relays.push(item);
        });
        _this3.setState({ relays: relays });
      });
    }
  }, {
    key: 'autoControlls',
    value: function autoControlls(val) {
      if (!this.state.autoControlls) return;
      switch (val.key) {
        case 'plants_light_level':
          console.log(val.key, ' ', val.val());
          if (val.val() < _config2.default.autoControlls.lightMinValue) _RealtimeIO2.default.set('relays/plants_light', 1);else _RealtimeIO2.default.set('relays/plants_light', 0);
          break;
        case 'humidity':
          console.log(val.key, ' ', val.val());
          if (val.val() < _config2.default.autoControlls.humidityMinValue) _RealtimeIO2.default.set('relays/plants_humidity', 1);else _RealtimeIO2.default.set('relays/plants_humidity', 0);
          break;
        default:

      }
    }
  }, {
    key: 'updateSensorData',
    value: function updateSensorData() {
      var _this4 = this;

      _RealtimeIO2.default.listen('child_changed', 'sensors', function (snapshot) {
        _this4.getSensorData();
        _this4.autoControlls(snapshot);

        // const data = snapshot
        // var updatedSensor = this.findArrayElementByTitle(this.state.sensors, data.key)
        //
        // console.log('child_changed ', updatedSensor.key, ' ', data.val())
        // this.setState({updatedSensor: data.val()})
      });
      _RealtimeIO2.default.listen('child_changed', 'relays', function (snapshot) {

        _this4.getRelaysData();
      });
    }
  }, {
    key: 'findArrayElementByTitle',
    value: function findArrayElementByTitle(array, key) {
      return array.find(function (element) {
        return element.key === key;
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(val) {
      switch (val.key) {
        case 'plants_humidity':
          _RealtimeIO2.default.set('relays/' + val.key, val.val() + 1);
          break;
        case 'auto_controlls':
          _RealtimeIO2.default.set('relays/' + val.key, val.val() === 1 ? 0 : 1);
          this.setState({ autoControlls: val.val() === 1 ? 0 : 1 });
          break;
        default:
          _RealtimeIO2.default.set('relays/' + val.key, val.val() === 1 ? 0 : 1);
          break;

      }
    }
  }, {
    key: 'formatString',
    value: function formatString(str) {
      return str.replace(/_/g, " ");
    }
  }, {
    key: 'render',
    value: function render() {

      var sensors = this.state.sensors.map(function (item, idx) {
        return _react2.default.createElement(_List.List, { key: idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, _react2.default.createElement(_List.ListItem, {
          key: idx,
          primaryText: (this, item.key.replace(/_/g, " ") + ' ' + item.val()),
          className: 'sensor',
          color: _colors.red500,
          disabled: false, __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }));
      });
      var relays = this.state.relays.map(function (item, idx) {
        return _react2.default.createElement(_List.List, { key: idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, _react2.default.createElement(_RaisedButton2.default, {
          key: idx,
          primary: true,
          className: 'button',
          label: (this, item.key.replace(/_/g, " ").toLowerCase() + ' ' + (item.val() ? "on" : "off")),
          onClick: this.handleClick.bind(this, item), __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }));
      }.bind(this));

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, sensors), _react2.default.createElement(_Divider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, relays));
    }
  }]);

  return PlantsData;
}(_react.Component);

exports.default = PlantsData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxhbnRzRGF0YS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJhaXNlZEJ1dHRvbiIsIlJlYWN0U3BlZWRvbWV0ZXIiLCJSZWFsdGltZUlPIiwiQ29uZmlnIiwiTGlzdCIsIkxpc3RJdGVtIiwiRGl2aWRlciIsIkFjdGlvbkdyYWRlIiwicmVkNTAwIiwieWVsbG93NTAwIiwiYmx1ZTUwMCIsIlBsYW50c0RhdGEiLCJwcm9wcyIsInN0YXRlIiwic2Vuc29ycyIsInJlbGF5cyIsImF1dG9Db250cm9sbHMiLCJoYW5kbGVDbGljayIsImJpbmQiLCJnZXRTZW5zb3JEYXRhIiwiZ2V0UmVsYXlzRGF0YSIsInVwZGF0ZVNlbnNvckRhdGEiLCJmaW5kQXJyYXlFbGVtZW50QnlUaXRsZSIsImZvcm1hdFN0cmluZyIsImludGVydmFsIiwiY29uc29sZSIsImxvZyIsImNsZWFySW50ZXJ2YWwiLCJsb2FkIiwic25hcHNob3QiLCJmb3JFYWNoIiwiY2hpbGRTbmFwc2hvdCIsIml0ZW0iLCJwdXNoIiwic2V0U3RhdGUiLCJ2YWwiLCJrZXkiLCJsaWdodE1pblZhbHVlIiwic2V0IiwiaHVtaWRpdHlNaW5WYWx1ZSIsImxpc3RlbiIsImFycmF5IiwiZmluZCIsImVsZW1lbnQiLCJzdHIiLCJyZXBsYWNlIiwibWFwIiwiaWR4IiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBUSxBQUFNOztBQUNkLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUSxBQUFRLEFBQVc7Ozs7Ozs7SSxBQUVyQjtzQ0FDSjs7c0JBQUEsQUFBYSxPQUFPO3dDQUFBOzs4SUFBQSxBQUNYLEFBQ1A7O1VBQUEsQUFBSztlQUFRLEFBQ0YsQUFDVDtj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REYsQUFBUSxBQUNOLEFBUUg7QUFSRztBQUNFO0FBSE4sQUFBZ0IsQUFXaEIsT0FYZ0I7VUFXVixjQUFTLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsY0FBSSxBQUFTLE1BQVQsQUFBZSxLQUFJLEFBQ3REOytCQUFRLEFBQUMsNEJBQUssS0FBTixBQUFXO3NCQUFYO3dCQUFBLEFBQ047QUFETTtTQUFBLGtCQUNOLEFBQUM7ZUFBRCxBQUNLLEFBQ0w7bUJBRkEsQUFFUyxBQUNUO3FCQUhBLEFBR1UsQUFDVjtrQkFBTyxNQUFLLEtBQUEsQUFBSyxJQUFMLEFBQVMsUUFBVCxBQUFpQixNQUFqQixBQUF1QixLQUF2QixBQUE0QixnQkFBNUIsQUFBNEMsT0FBTSxLQUFBLEFBQUssUUFBTCxBQUFhLE9BSjNFLEFBSUEsQUFBWSxBQUFzRSxBQUNsRjttQkFBUyxLQUFBLEFBQUssWUFBTCxBQUFpQixLQUFqQixBQUFzQixNQUwvQixBQUtTLEFBQTJCO3NCQUxwQzt3QkFERixBQUFRLEFBQ04sQUFPSDtBQVBHO0FBQ0E7QUFIaUMsT0FBQSxDQUFBLEFBU25DLEtBVEYsQUFBZSxBQUFzQixBQVM5QixBQUVQLEtBWGU7OzZCQVliLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsU0FERixBQUNFLEFBQ0EsMEJBQUEsQUFBQzs7b0JBQUQ7c0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxTQUpKLEFBQ0UsQUFHRSxBQUlMOzs7OztBQTFKc0IsQSxBQTZKekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUGxhbnRzRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2ltLmVyaWtzc29uL0RvY3VtZW50cy9raW1zc29uL3BsYW50cyJ9