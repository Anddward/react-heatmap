'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _node_modulesHeatmapJsHeatmapJs = require('../node_modules/heatmap.js/heatmap.js');

var _node_modulesHeatmapJsHeatmapJs2 = _interopRequireDefault(_node_modulesHeatmapJsHeatmapJs);

var ReactHeatmap = (function (_Component) {
	_inherits(ReactHeatmap, _Component);

	function ReactHeatmap(props) {
		_classCallCheck(this, ReactHeatmap);

		_get(Object.getPrototypeOf(ReactHeatmap.prototype), 'constructor', this).call(this, props);
		this.setData = this.setData.bind(this);
	}

	_createClass(ReactHeatmap, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.heatmap = _node_modulesHeatmapJsHeatmapJs2['default'].create({
				container: _reactDom2['default'].findDOMNode(this)
			});
			this.setData(this.props.max, this.props.data);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			this.setData(newProps.max, newProps.data);
		}
	}, {
		key: 'setData',
		value: function setData(max, data) {
			this.heatmap.setData({
				max: max,
				data: data
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement('div', { style: { width: '100%', height: '100%' } });
		}
	}]);

	return ReactHeatmap;
})(_react.Component);

ReactHeatmap.propTypes = {
	max: _react2['default'].PropTypes.number,
	data: _react2['default'].PropTypes.array
};

ReactHeatmap.defaultProps = {
	max: 5,
	data: []
};

exports['default'] = ReactHeatmap;
module.exports = exports['default'];