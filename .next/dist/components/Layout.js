'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Menu = require('./../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kim.eriksson/Documents/kimsson/plants/components/Layout.js';


var layoutStyle = {
  // margin: 20
  // padding: 20,
  // border: '1px solid rgba(0,0,0,0.1)'
};

exports.default = function (_ref) {
  var props = _ref.props,
      children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'This is the default title' : _ref$title;
  return _react2.default.createElement('div', { style: layoutStyle, className: 'jsx-2725557926',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('title', {
    className: 'jsx-2725557926',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, title), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-2725557926',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-2725557926',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), _react2.default.createElement('header', {
    className: 'jsx-2725557926',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '2725557926',
    css: 'h1,h2,h3,h4,p,a,li{font-family:"Roboto";}ul{padding:0;}li{list-style:none;margin:5px 0;}a{text-decoration:underline;color:black;}a:hover{opacity:0.6;}.button{text-transform:capitalize!important;with:100%!important;display:block!important;}.sensor{text-transform:capitalize;}.footer{min-width:100%;text-align:center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CdUIsQUFJOEIsQUFJWCxBQUlNLEFBS1UsQUFLZCxBQUd1QixBQUtWLEFBR1YsVUF4QmpCLEVBY0EsR0FXb0IsQ0FyQkwsS0FSZixLQWFjLEFBYWQsR0FqQkEsSUFxQkEsR0FUc0IsRUFQdEIsa0JBUTBCLHdCQUMxQiIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2ltLmVyaWtzc29uL0RvY3VtZW50cy9raW1zc29uL3BsYW50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi8uLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgX0pTWFN0eWxlIGZyb20gXCJzdHlsZWQtanN4L3N0eWxlXCJcblxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XG4gIC8vIG1hcmdpbjogMjBcbiAgLy8gcGFkZGluZzogMjAsXG4gIC8vIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSknXG59XG5leHBvcnQgZGVmYXVsdCAoeyBwcm9wcywgY2hpbGRyZW4sIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnIH0pID0+IChcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgIDwvaGVhZGVyPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cbiAgICAgIGgxLCBoMiwgaDMsIGg0LCBwLCBhLCBsaSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZSFpbXBvcnRhbnQ7XG4gICAgICAgIHdpdGg6IDEwMCUhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAuc2Vuc29yIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcbiAgICAgIH1cbiAgICAgIC5mb290ZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICB7IGNoaWxkcmVuIH1cblxuICAgIDxmb290ZXI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJcIj5Db3B5cmlnaHQga2ltc3NvbiBpbmMuPC9wPlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=components/Layout.js */'
  }), children, _react2.default.createElement('footer', {
    className: 'jsx-2725557926',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement('p', {
    className: 'jsx-2725557926' + ' ' + 'footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, 'Copyright kimsson inc.')));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiTWVudSIsIl9KU1hTdHlsZSIsImxheW91dFN0eWxlIiwicHJvcHMiLCJjaGlsZHJlbiIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTtBQUVKO0FBQ0E7QUFIRixBQUFvQixBQUtwQjtBQUxvQixBQUNsQjs7a0JBSWEsZ0JBQUE7TUFBQSxBQUFHLGFBQUgsQUFBRztNQUFILEFBQVUsZ0JBQVYsQUFBVTt3QkFBVixBQUFvQjtNQUFwQixBQUFvQixtQ0FBcEIsQUFBNEIsOEJBQTVCO3lCQUNiLGNBQUEsU0FBSyxPQUFMLEFBQVksd0JBQVo7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFBUztBQUFUO0FBQUEsS0FERixBQUNFLEFBQ0EsZ0RBQU0sU0FBTixBQUFjLG9CQUFkOztnQkFBQTtrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QixvREFBOUI7O2dCQUFBO2tCQUpKLEFBQ0UsQUFHRSxBQUVGO0FBRkU7O2VBRUY7O2dCQUFBO2tCQU5GLEFBTUU7QUFBQTtBQUFBO2FBTkY7U0FBQSxBQTZDSTtBQTdDSixNQUFBLEFBK0NFLDBCQUFBLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTt3Q0FBQSxBQUFhOztnQkFBYjtrQkFBQTtBQUFBO0FBQUEsS0FqRFMsQUFDYixBQStDRSxBQUNFO0FBakROIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2ltLmVyaWtzc29uL0RvY3VtZW50cy9raW1zc29uL3BsYW50cyJ9