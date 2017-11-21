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

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kim.eriksson/Documents/kimsson/plants/components/Menu.js';


var linkStyle = {
  marginRight: 15

  /**
   * A simple example of `AppBar` with an icon on the right.
   * By default, the left icon is a navigation-menu.
   */

};
var Menu = function (_React$Component) {
  (0, _inherits3.default)(Menu, _React$Component);

  function Menu(props) {
    (0, _classCallCheck3.default)(this, Menu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props));

    _this.state = { open: false };

    _this.toggleDrawer = _this.toggleDrawer.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Menu, [{
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
      return _react2.default.createElement('div', { style: contentStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_AppBar2.default, {
        title: 'Plants',
        showMenuIconButton: true,
        docked: 'false',
        width: '100',
        onLeftIconButtonTouchTap: this.toggleDrawer.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_Drawer2.default, {
        open: this.state.open, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_MenuItem2.default, { onClick: this.handleClose.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Home'), _react2.default.createElement(_MenuItem2.default, { onClick: this.handleClose.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'About')));
    }
  }]);

  return Menu;
}(_react2.default.Component);

exports.default = Menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRyYXdlciIsIk1lbnVJdGVtIiwiQXBwQmFyIiwiTGluayIsImxpbmtTdHlsZSIsIm1hcmdpblJpZ2h0IiwiTWVudSIsInByb3BzIiwic3RhdGUiLCJvcGVuIiwidG9nZ2xlRHJhd2VyIiwiYmluZCIsImhhbmRsZUNsb3NlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY29udGVudFN0eWxlIiwidHJhbnNpdGlvbiIsIm1hcmdpbkxlZnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU07ZUFDUyxBQUdmOztBQUpBLEFBQWtCOzs7OztBQUFBLEFBQ2hCO0ksQUFRbUI7Z0NBQ25COztnQkFBQSxBQUFZLE9BQU87d0NBQUE7O2tJQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLLFFBQVEsRUFBQyxNQUFkLEFBQWEsQUFBTyxBQUVwQjs7VUFBQSxBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FBdEMsQUFDQTtVQUFBLEFBQUssY0FBYyxNQUFBLEFBQUssWUFBTCxBQUFpQixLQUxuQixBQUtqQjtXQUNEOzs7OzttQ0FDZSxBQUNkO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtXQUFBLEFBQUssU0FBUyxFQUFDLE1BQU0sQ0FBQyxLQUFBLEFBQUssTUFBM0IsQUFBYyxBQUFtQixBQUNsQzs7OztrQ0FDYyxBQUNiO1dBQUEsQUFBSyxTQUFTLEVBQUMsTUFBZixBQUFjLEFBQU8sQUFDdEI7Ozs7NkJBQ1EsQUFDUDtVQUFNLGVBQWUsRUFBRyxZQUF4QixBQUFxQixBQUFlLEFBRXBDOztVQUFJLEtBQUEsQUFBSyxNQUFULEFBQWUsTUFBTSxBQUNuQjtxQkFBQSxBQUFhLGFBQWIsQUFBMEIsQUFDM0I7QUFDRDs2QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7ZUFBRCxBQUNRLEFBQ047NEJBRkYsQUFFc0IsQUFDcEI7Z0JBSEYsQUFHUyxBQUNQO2VBSkYsQUFJUSxBQUNOO2tDQUEwQixLQUFBLEFBQUssYUFBTCxBQUFrQixLQUw5QyxBQUs0QixBQUF1Qjs7b0JBTG5EO3NCQURGLEFBQ0UsQUFPQTtBQVBBO0FBQ0UsMEJBTUYsQUFBQztjQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CO29CQURuQjtzQkFBQSxBQUVBO0FBRkE7QUFDRSx5QkFDRixBQUFDLG9DQUFTLFNBQVMsS0FBQSxBQUFLLFlBQUwsQUFBaUIsS0FBcEMsQUFBbUIsQUFBc0I7b0JBQXpDO3NCQUFBO0FBQUE7U0FGQSxBQUVBLEFBR0EseUJBQUEsQUFBQyxvQ0FBUyxTQUFTLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXBDLEFBQW1CLEFBQXNCO29CQUF6QztzQkFBQTtBQUFBO1NBZEosQUFDRSxBQVFFLEFBS0EsQUFNTDs7Ozs7RUF6QytCLGdCQUFNLEE7O2tCQUFuQixBIiwiZmlsZSI6Ik1lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tpbS5lcmlrc3Nvbi9Eb2N1bWVudHMva2ltc3Nvbi9wbGFudHMifQ==