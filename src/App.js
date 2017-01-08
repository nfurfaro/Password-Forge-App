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
    backgroundColor: '#780707',
  },
  trackOff: {
    backgroundColor: '#FF3232',
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

//------------------------------------------------------------------
// Component
//------------------------------------------------------------------
class App extends Component {
    constructor(props, context) {
       super(props,context);
        this.state = {
          Slider: 23,
          UppercaseToggle: "True",
          SymbolsToggle: "True",
          NumbersToggle: "True"
        };
    };

// handlers
  handleSlider = (event, value) => {
      this.setState({Slider: value})
  };

  handleToggleUppercase = (event) => {
    this.state.UppercaseToggle ? this.setState({UppercaseToggle: false}) : this.setState({UppercaseToggle: true})
  };

  handleToggleSymbols = (event) => {
    this.state.SymbolsToggle ? this.setState({SymbolsToggle: false}) : this.setState({SymbolsToggle: true})
  };

  handleToggleNumbers = (event) => {
    this.state.NumbersToggle ? this.setState({NumbersToggle: false}) : this.setState({NumbersToggle: true})
  };

  handleClick1 = function(e) {
    const Length = this.state.Slider
    var generatePassword = require("password-maker");
    var options = {
    uppercase: this.state.UppercaseToggle,
    symbols  : this.state.SymbolsToggle,
    numbers  : this.state.NumbersToggle
  };
    var makePassword = generatePassword(options, Length)
    document.getElementById("password").innerHTML = makePassword
  };

  handleClick2 = function(e) {
    alert('Copy not built yet!')
  }

//end handlers

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <FontAwesome
            className='fa-snowflake-o'
            name='snowflake'
            size='5x'/>
        <h1>Password.new</h1>
        <div>
    <div className="Slider">
      <Slider className="Line"
          min={4}
          max={42}
          step={1}
          value={this.state.Slider}
          onChange={this.handleSlider.bind(this)}
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
         onToggle={this.handleToggleUppercase.bind(this)}

       />

       <Toggle
         label="Symbols"
         thumbStyle={styles.thumbOff}
         trackStyle={styles.trackOff}
         thumbSwitchedStyle={styles.thumbSwitched}
         trackSwitchedStyle={styles.trackSwitched}
         labelStyle={styles.labelStyle}
         defaultToggled="true"
         onToggle={this.handleToggleSymbols.bind(this)}
       />

       <Toggle
         label="Numbers"
         thumbStyle={styles.thumbOff}
         trackStyle={styles.trackOff}
         thumbSwitchedStyle={styles.thumbSwitched}
         trackSwitchedStyle={styles.trackSwitched}
         labelStyle={styles.labelStyle}
         defaultToggled="true"
         onToggle={this.handleToggleNumbers.bind(this)}
       />

    </div>


  </div>
        <RaisedButton label="New" backgroundColor='#FF3232' labelColor="#7FFFFF" onClick={this.handleClick1.bind(this)}/>
          <h3 id="password"></h3>
        <RaisedButton className="Copy"label="Copy" backgroundColor="#006A6C"
        labelColor="#7FFFFF" onClick={this.handleClick2.bind(this)} />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
