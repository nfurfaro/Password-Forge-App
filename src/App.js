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



// Toggle Styles

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
    backgroundColor: '#A60707',
  },
  trackOff: {
    backgroundColor: '#F20000',
  },
  thumbSwitched: {
    backgroundColor: '#7FFFFF',
  },
  trackSwitched: {
    backgroundColor: '#006A6C',
  },
  labelStyle: {
    color: '#7FFFFF',
    fontSize: 25,
    fontWeight: 300,
    letterSpacing: 1.5,
  },
};

//Password-Maker Stuff
const Length = 23
const generatePassword = require("password-maker");
const options = {
    uppercase: true,
    symbols  : true,
    numbers  : true
  };

//------------------------------------------------------------------
// Component
//------------------------------------------------------------------



class App extends Component {

 constructor(props) {
    super(props);
    this.state = {Slider: 23};
  }


// handlers

    handleSlider = (event, value) => {
    this.setState({Slider: value});
  };

  handleToggleUppercase = (event) => {
    alert('switch-U')
  };

  handleToggleSymbols = (event) => {
    alert('switch-S')
  };

  handleToggleNumbers = (event) => {
    alert('switch-N')
  };

  handleClick1 = function(e) {
    const makePassword = generatePassword(options,Length)
    document.getElementById("password").innerHTML = makePassword
  };

  handleClick2 = function(e) {
    alert('Copy not built yet!')
  };

//end handlers

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
      <Slider className="Line"
          min={4}
          max={42}
          step={1}
          defaultValue={23}
          value={this.state.Slider}
          onChange={this.handleSlider}
        />
        </div>
        <h2>{'Password Length: '}{this.state.Slider}</h2>



    <div className="Toggles" style={styles.block}>

       <Toggle
         label="Uppercase"
         thumbStyle={styles.thumbOff}
         trackStyle={styles.trackOff}
         thumbSwitchedStyle={styles.thumbSwitched}
         trackSwitchedStyle={styles.trackSwitched}
         labelStyle={styles.labelStyle}
         defaultToggled="true"
         onToggle={this.handleToggleUppercase}

       />

       <Toggle
         label="Symbols"
         thumbStyle={styles.thumbOff}
         trackStyle={styles.trackOff}
         thumbSwitchedStyle={styles.thumbSwitched}
         trackSwitchedStyle={styles.trackSwitched}
         labelStyle={styles.labelStyle}
         defaultToggled="true"
         onToggle={this.handleToggleSymbols}
       />

       <Toggle
         label="Numbers"
         thumbStyle={styles.thumbOff}
         trackStyle={styles.trackOff}
         thumbSwitchedStyle={styles.thumbSwitched}
         trackSwitchedStyle={styles.trackSwitched}
         labelStyle={styles.labelStyle}
         defaultToggled="true"
         onToggle={this.handleToggleNumbers}
       />

    </div>


  </div>
        <RaisedButton label="Make" backgroundColor='#FF3232' labelColor="black" labelWeight="500" onClick={this.handleClick1}/>
          <h3 id="password"></h3>
        <RaisedButton className="Copy"label="Copy" backgroundColor="#006A6C"
        labelColor="#7FFFFF" onClick={this.handleClick2} />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
