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

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _PlantsData = require('./../components/PlantsData');

var _PlantsData2 = _interopRequireDefault(_PlantsData);

var _PlantsLogs = require('./../components/PlantsLogs');

var _PlantsLogs2 = _interopRequireDefault(_PlantsLogs);

var _Layout = require('./../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Fonts = require('./../components/fonts/Fonts');

var _Fonts2 = _interopRequireDefault(_Fonts);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kim.eriksson/Documents/kimsson/plants/pages/index.js?entry';


var linkStyle = {
  marginRight: 15
};

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.state = { open: false };

    _this.toggleDrawer = _this.toggleDrawer.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _Fonts2.default)();
    }
  }, {
    key: 'toggleDrawer',
    value: function toggleDrawer() {
      console.log('toggleDrawer');
      this.setState({ open: !this.state.open });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var contentStyle = { transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

      if (this.state.open) {
        contentStyle.marginLeft = 256;
      }
      return _react2.default.createElement(_MuiThemeProvider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('div', { style: contentStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_AppBar2.default, {
        title: 'Plants',
        showMenuIconButton: true,
        docked: 'false',
        width: '100',
        onLeftIconButtonTouchTap: this.toggleDrawer.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement(_Drawer2.default, {
        open: this.state.open, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_MenuItem2.default, { onClick: this.handleClose.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Home'), _react2.default.createElement(_MenuItem2.default, { onClick: this.handleClose.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'About')), _react2.default.createElement(_PlantsData2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement(_PlantsLogs2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }))));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk11aVRoZW1lUHJvdmlkZXIiLCJQbGFudHNEYXRhIiwiUGxhbnRzTG9ncyIsIkxheW91dCIsIkZvbnRzIiwiUmVhY3QiLCJEcmF3ZXIiLCJNZW51SXRlbSIsIkFwcEJhciIsIkxpbmsiLCJsaW5rU3R5bGUiLCJtYXJnaW5SaWdodCIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsIm9wZW4iLCJ0b2dnbGVEcmF3ZXIiLCJiaW5kIiwiaGFuZGxlQ2xvc2UiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJjb250ZW50U3R5bGUiLCJ0cmFuc2l0aW9uIiwibWFyZ2luTGVmdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU07ZUFBTixBQUFrQixBQUNIO0FBREcsQUFDaEI7O0lBSUksQTtpQ0FDSjs7aUJBQUEsQUFBWSxPQUFPO3dDQUFBOztvSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSyxRQUFRLEVBQUMsTUFBZCxBQUFhLEFBQU8sQUFFcEI7O1VBQUEsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXRDLEFBQ0E7VUFBQSxBQUFLLGNBQWMsTUFBQSxBQUFLLFlBQUwsQUFBaUIsS0FMbkIsQUFLakI7V0FDRDs7Ozs7d0NBQ29CLEFBQ25CO0FBQ0Q7Ozs7bUNBQ2UsQUFDZDtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7V0FBQSxBQUFLLFNBQVMsRUFBQyxNQUFNLENBQUMsS0FBQSxBQUFLLE1BQTNCLEFBQWMsQUFBbUIsQUFDbEM7Ozs7a0NBQ2MsQUFDYjtXQUFBLEFBQUssU0FBUyxFQUFDLE1BQWYsQUFBYyxBQUFPLEFBQ3RCOzs7OzZCQUNTLEFBQ1I7VUFBTSxlQUFlLEVBQUcsWUFBeEIsQUFBcUIsQUFBZSxBQUVwQzs7VUFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLE1BQU0sQUFDbkI7cUJBQUEsQUFBYSxhQUFiLEFBQTBCLEFBQzNCO0FBQ0Q7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZO29CQUFaO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDO2VBQUQsQUFDUSxBQUNOOzRCQUZGLEFBRXNCLEFBQ3BCO2dCQUhGLEFBR1MsQUFDUDtlQUpGLEFBSVEsQUFDTjtrQ0FBMEIsS0FBQSxBQUFLLGFBQUwsQUFBa0IsS0FMOUMsQUFLNEIsQUFBdUI7O29CQUxuRDtzQkFEQSxBQUNBLEFBT0E7QUFQQTtBQUNFLDBCQU1GLEFBQUM7Y0FDTyxLQUFBLEFBQUssTUFEYixBQUNtQjtvQkFEbkI7c0JBQUEsQUFFQTtBQUZBO0FBQ0UseUJBQ0YsQUFBQyxvQ0FBUyxTQUFTLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXBDLEFBQW1CLEFBQXNCO29CQUF6QztzQkFBQTtBQUFBO1NBRkEsQUFFQSxBQUdBLHlCQUFBLEFBQUMsb0NBQVMsU0FBUyxLQUFBLEFBQUssWUFBTCxBQUFpQixLQUFwQyxBQUFtQixBQUFzQjtvQkFBekM7c0JBQUE7QUFBQTtTQWJBLEFBUUEsQUFLQSxBQUlBLDJCQUFBLEFBQUM7O29CQUFEO3NCQWpCQSxBQWlCQSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFyQk4sQUFDRSxBQUNFLEFBQ0UsQUFrQkEsQUFLUDtBQUxPO0FBQUE7Ozs7O0VBN0NVLGdCQUFNLEEsQUFxRDFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9raW0uZXJpa3Nzb24vRG9jdW1lbnRzL2tpbXNzb24vcGxhbnRzIn0=