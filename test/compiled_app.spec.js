'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _App = require('../src/App');

var _App2 = _interopRequireDefault(_App);

var _reactFontawesome = require('../node_modules/react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Slider = require('../node_modules/material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _Toggle = require('../node_modules/material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _RaisedButton = require('../node_modules/material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

describe("Test Suite for App", function () {

  it('renders FontAwesome, Slider, Toggle, CopyToClipboard and RaisedButton Components', function () {
    var wrapper = (0, _enzyme.shallow)(_react2['default'].createElement(_App2['default'], null));
    (0, _chai.expect)(wrapper.find(_MuiThemeProvider2['default'])).to.have.length(1);
    (0, _chai.expect)(wrapper.find('div')).to.have.length(4);
    (0, _chai.expect)(wrapper.find('nav')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('img')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('h1')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('h2')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('h3#password-display')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('h4')).to.have.length(1);
    (0, _chai.expect)(wrapper.find(_reactFontawesome2['default'])).to.have.length(1);
    (0, _chai.expect)(wrapper.find(_Slider2['default'])).to.have.length(1);
    (0, _chai.expect)(wrapper.find(_Toggle2['default'])).to.have.length(3);
    (0, _chai.expect)(wrapper.find(_RaisedButton2['default'])).to.have.length(2);
    (0, _chai.expect)(wrapper.find(_reactCopyToClipboard2['default'])).to.have.length(1);
  });

  it('allows us to set props', function () {
    var wrapper = (0, _enzyme.mount)(_react2['default'].createElement(_App2['default'], {
      length: '23',
      includeUppercase: 'false',
      includeSymbols: 'false',
      includeNumbers: 'false',
      password: '\'\'',
      copied: 'false' }));

    (0, _chai.expect)(wrapper.props().length).to.equal("23");
    wrapper.setProps({ length: "7" });
    (0, _chai.expect)(wrapper.props().length).to.equal("7");

    (0, _chai.expect)(wrapper.props().includeUppercase).to.equal("false");
    wrapper.setProps({ includeUppercase: "true" });
    (0, _chai.expect)(wrapper.props().includeUppercase).to.equal("true");

    (0, _chai.expect)(wrapper.props().includeSymbols).to.equal("false");
    wrapper.setProps({ includeSymbols: "true" });
    (0, _chai.expect)(wrapper.props().includeSymbols).to.equal("true");

    (0, _chai.expect)(wrapper.props().includeNumbers).to.equal("false");
    wrapper.setProps({ includeNumbers: "true" });
    (0, _chai.expect)(wrapper.props().includeNumbers).to.equal("true");

    (0, _chai.expect)(wrapper.props().copied).to.equal("false");
    wrapper.setProps({ copied: "true" });
    (0, _chai.expect)(wrapper.props().copied).to.equal("true");

    (0, _chai.expect)(wrapper.props().password).to.equal("''");
    wrapper.setProps({ password: "123abc" });
    (0, _chai.expect)(wrapper.props().password).to.equal("123abc");
  });

  it('simulates click events', function () {
    var onButtonClick = _sinon2['default'].spy();
    var wrapper = (0, _enzyme.mount)(_react2['default'].createElement(_RaisedButton2['default'], { onClick: onButtonClick }));

    wrapper.find('button').simulate('click');
    (0, _chai.expect)(onClick.calledOnce).to.equal(true);
  });
});
