require("babel-register");
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../src/App';
import FontAwesome from '../node_modules/react-fontawesome';
import Slider from '../node_modules/material-ui/Slider';
import Toggle from '../node_modules/material-ui/Toggle';
import CopyToClipboard from 'react-copy-to-clipboard';
import RaisedButton from '../node_modules/material-ui/RaisedButton';
import sinon from 'sinon';

describe("Test Suite for App", function() {

  it('renders FontAwesome, Slider, Toggle, CopyToClipboard and RaisedButton Components', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find(MuiThemeProvider)).to.have.length(1);
    expect(wrapper.find('div')).to.have.length(4);
    expect(wrapper.find('nav')).to.have.length(1);
    expect(wrapper.find('img')).to.have.length(1);
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.find('h3#password-display')).to.have.length(1);
    expect(wrapper.find('h4')).to.have.length(1);
    expect(wrapper.find(FontAwesome)).to.have.length(1);
    expect(wrapper.find(Slider)).to.have.length(1);
    expect(wrapper.find(Toggle)).to.have.length(3);
    expect(wrapper.find(RaisedButton)).to.have.length(2);
    expect(wrapper.find(CopyToClipboard)).to.have.length(1);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<App
        length="23"
        includeUppercase="false"
        includeSymbols="false"
        includeNumbers="false"
        password="''"
        copied="false" />);

    expect(wrapper.props().length).to.equal("23");
    wrapper.setProps({ length: "7" });
    expect(wrapper.props().length).to.equal("7");

    expect(wrapper.props().includeUppercase).to.equal("false");
    wrapper.setProps({ includeUppercase: "true" });
    expect(wrapper.props().includeUppercase).to.equal("true");

    expect(wrapper.props().includeSymbols).to.equal("false");
    wrapper.setProps({ includeSymbols: "true" });
    expect(wrapper.props().includeSymbols).to.equal("true");

    expect(wrapper.props().includeNumbers).to.equal("false");
    wrapper.setProps({ includeNumbers: "true" });
    expect(wrapper.props().includeNumbers).to.equal("true");

    expect(wrapper.props().copied).to.equal("false");
    wrapper.setProps({ copied: "true" });
    expect(wrapper.props().copied).to.equal("true");

    expect(wrapper.props().password).to.equal("''");
    wrapper.setProps({ password: "123abc" });
    expect(wrapper.props().password).to.equal("123abc");
  });


  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<RaisedButton onClick={onButtonClick} />);

    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });

});
