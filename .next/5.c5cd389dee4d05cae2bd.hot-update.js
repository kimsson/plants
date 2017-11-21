webpackHotUpdate(5,{

/***/ 1246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(678);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(542);

var _config2 = _interopRequireDefault(_config);

var _RealtimeIO = __webpack_require__(635);

var _RealtimeIO2 = _interopRequireDefault(_RealtimeIO);

var _reactMoment = __webpack_require__(1248);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/kim.eriksson/Documents/kimsson/plants/components/PlantsLogs.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kim.eriksson/Documents/kimsson/plants/components/PlantsLogs.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jNWNkMzg5ZGVlNGQwNWNhZTJiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QbGFudHNMb2dzLmpzPzc1YTUyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzJ1xuaW1wb3J0IFJlYWx0aW1lSU8gZnJvbSAnLi8uLi91dGlscy9SZWFsdGltZUlPJ1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuXG5jb25zdCBMT0dfSU5URVJWQUwgPSA2MDAwMFxuXG5jbGFzcyBQbGFudHNMb2dzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZW5zb3JzOiBbXSxcbiAgICAgIGxvZ3M6IFtdXG4gICAgfVxuICAgIHRoaXMuc2V0TG9nID0gdGhpcy5zZXRMb2cuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0TG9nID0gdGhpcy5nZXRMb2cuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0U2Vuc29yRGF0YSA9IHRoaXMuZ2V0U2Vuc29yRGF0YS5iaW5kKHRoaXMpXG4gIH1cblxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG5cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgLy8gdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuc2V0TG9nLCBMT0dfSU5URVJWQUwpXG4gICAgdGhpcy5nZXRTZW5zb3JEYXRhKClcbiAgfVxuICBnZXRTZW5zb3JEYXRhICgpIHtcbiAgICB2YXIgc2Vuc29ycyA9IFtdO1xuICAgIC8vIFJlYWx0aW1lSU8ubG9hZCgnc2Vuc29ycycsIGZ1bmN0aW9uIChzbmFwc2hvdCkge1xuICAgIFJlYWx0aW1lSU8ubG9hZCgnc2Vuc29ycycsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgc25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihjaGlsZFNuYXBzaG90KSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBjaGlsZFNuYXBzaG90XG5cbiAgICAgICAgICBzZW5zb3JzLnB1c2goaXRlbSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbnNvcnM6IHNlbnNvcnN9KVxuICAgICAgdGhpcy5zZXRMb2coKVxuXG4gICAgfSlcblxuICB9XG4gIHNldExvZyAoKSB7XG4gICAgbGV0IGQ9IG5ldyBEYXRlKClcbiAgICBkPWQudG9Mb2NhbGVTdHJpbmcoKVxuICAgIGQ9ZC5yZXBsYWNlICgvLC9nLCBcIlwiKVxuICAgIGlmKCF0aGlzLnN0YXRlLnNlbnNvcnMpIHJldHVyblxuICAgIFJlYWx0aW1lSU8uc2V0KCdsb2dzLycgKyBuZXcgRGF0ZSgpLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnNlbnNvcnMpKVxuICAgIHZhciBsb2dzID0gW11cbiAgICBSZWFsdGltZUlPLmxvYWQoJ2xvZ3MnLCAoc25hcHNob3QpID0+IHtcbiAgICAgIHNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oY2hpbGRTbmFwc2hvdCkge1xuICAgICAgICAgIHZhciBpdGVtID0gY2hpbGRTbmFwc2hvdFxuXG4gICAgICAgICAgbG9ncy5wdXNoKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2dzOiBsb2dzfSlcbiAgICAgIHRoaXMuZ2V0TG9nKCk7XG4gICAgfSlcbiAgfVxuICBnZXRMb2coKSB7XG4gICAgY29uc3QgbG9ncyA9IHRoaXMuc3RhdGUubG9ncy5tYXAoZnVuY3Rpb24oaXRlbSwgaWR4KXtcbiAgICAgIGxldCBsb2cgPSB7XG4gICAgICAgIGRhdGU6IGl0ZW0ua2V5LFxuICAgICAgICBsb2c6IEpTT04ucGFyc2UoaXRlbS52YWwoKSlcbiAgICAgIH1cbiAgICAgIHJldHVybiAobG9nKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+bG9nczwvZGl2PlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGxhbnRzTG9nc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9QbGFudHNMb2dzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFIQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUVBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQUlBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=