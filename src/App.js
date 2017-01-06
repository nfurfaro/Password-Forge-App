import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import FontAwesome from 'react-fontawesome';
import './resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
require("password-maker")

const that = this

  /*
const options = {
    uppercase: state.switched ? true : false,
    symbols  : state.switched ? true : false,
    numbers  : state.switched ? true : false
  };
*/

// Toggles
  const styles = {
  block: {
    maxWidth: '15%',
    marginLeft: '42.5%',
    marginBottom: '40px',
    textAlign: 'left',
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#007171',
  },
  trackOff: {
    backgroundColor: '#fff',
  },
  thumbSwitched: {
    backgroundColor: '#BC0000',
  },
  trackSwitched: {
    backgroundColor: '#FF0000',
  },
  labelStyle: {
    color: '#e2feff',
  },
};

//------------------------------------------------------------------
// Component
//------------------------------------------------------------------

class App extends Component {

 constructor(props) {
    super(props);
    this.state = {Slider: 11};
    const that = this.state
  }

// handlers

  handleSlider = (event, value) => {
    this.setState({Slider: value});
  };

  handleClick1 = function(e) {

    const generatePassword = require("password-maker");

    const options = {
        uppercase: true,
        symbols  : true,
        numbers  : true
      };

    const passwordLength = {state: Slider}

    const makePassword = generatePassword(options,that)
    document.getElementById("password").innerHTML = makePassword
  };


  handleClick2 = function(e) {
    alert('Copy not built yet!')
  };

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <FontAwesome
            className='fa-snowflake-o'
            name='snowflake'
            size='5x'/>
        <h1>Password Maker</h1>
        <div>
    <div className="Slider">
        <div className="sliderText">
          <h2>{'Password Length: '}{this.state.Slider}</h2>
        </div>
        <Slider
          min={4}
          max={40}
          step={1}
          defaultValue={11}
          value={this.state.Slider}
          onChange={this.handleSlider}
        />
      </div>
    <div className="Toggles" style ={styles.block}>

       <Toggle
         label="Letters"
         thumbStyle={styles.thumbOff}
         trackStyle={styles.trackOff}
         thumbSwitchedStyle={styles.thumbSwitched}
         trackSwitchedStyle={styles.trackSwitched}
         labelStyle={styles.labelStyle}
       />

       <Toggle
         label="Numbers"
         thumbStyle={styles.thumbOff}
         trackStyle={styles.trackOff}
         thumbSwitchedStyle={styles.thumbSwitched}
         trackSwitchedStyle={styles.trackSwitched}
         labelStyle={styles.labelStyle}
       />

       <Toggle
         label="Symbols"
         thumbStyle={styles.thumbOff}
         trackStyle={styles.trackOff}
         thumbSwitchedStyle={styles.thumbSwitched}
         trackSwitchedStyle={styles.trackSwitched}
         labelStyle={styles.labelStyle}
       />

    </div>

  </div>
        <RaisedButton label="Make Password" backgroundColor='#FF0000' onClick={this.handleClick1}/>
          <h2 id="password"></h2>
        <RaisedButton label="Copy Password"  backgroundColor='#003233' labelColor='#fff' onClick={this.handleClick2} />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
