'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fontfaceobserver = require('fontfaceobserver');

var _fontfaceobserver2 = _interopRequireDefault(_fontfaceobserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fonts = function Fonts() {
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  var roboto = new _fontfaceobserver2.default('Roboto');

  roboto.load().then(function () {
    document.documentElement.classList.add('roboto');
  });
};
exports.default = Fonts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9udHMvRm9udHMuanMiXSwibmFtZXMiOlsiRm9udEZhY2VPYnNlcnZlciIsIkZvbnRzIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJyZWwiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJyb2JvdG8iLCJsb2FkIiwidGhlbiIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFNLFFBQVEsU0FBUixBQUFRLFFBQU0sQUFDbEI7TUFBTSxPQUFPLFNBQVMsQUFBVCxjQUF1QixBQUF2QixBQUFiLEFBQ0E7T0FBSyxBQUFMLE9BQVksQUFBWixBQUNBO09BQUssQUFBTCxNQUFXLEFBQVgsQUFFQTs7V0FBUyxBQUFULEtBQWMsQUFBZCxZQUEwQixBQUExQixBQUVBOztNQUFNLFNBQVMsQUFBSSxBQUFKLCtCQUFxQixBQUFyQixBQUFmLEFBRUE7O1NBQU8sQUFBUCxPQUFjLEFBQWQsS0FBbUIsWUFBTSxBQUN2QjthQUFTLEFBQVQsZ0JBQXlCLEFBQXpCLFVBQW1DLEFBQW5DLElBQXVDLEFBQXZDLEFBQ0Q7QUFGRCxBQUdEO0FBWkQsQUFhQTtrQkFBZSxBQUFmIiwiZmlsZSI6IkZvbnRzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9raW0uZXJpa3Nzb24vRG9jdW1lbnRzL2tpbXNzb24vcGxhbnRzIn0=