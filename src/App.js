import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';
import FontAwesome from 'react-fontawesome';
import './resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import passwordMaker from 'password-maker';
import CopyToClipboard from 'react-copy-to-clipboard';
import logo from './PasswordForgeLogo3.svg'


// Slider Style

const muiTheme = getMuiTheme({
  slider: {
    trackColor: '#F54242',
    selectionColor: '#7fffff',
    handleSize: 25,
    rippleColor: '#7fffff',
    handleColorZero:'#F54242'
  },
});


// Toggle Styles

const styles = {
  block: {
    maxWidth: '15%',
    marginLeft: '42.5%',
    marginBottom: '40px',
    textAlign: 'left',
  },
  toggle: {
    marginBottom: 10,
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
    fontFamily: 'Jura, sans-serif',
    fontSize: 25,
    fontWeight: 500,
    letterSpacing: 1.5,
  },
};

// Button Style

const buttonStyle = {
  width: '10%',
};

const labelStyle = {
  fontFamily: 'Jura, sans-serif',
  fontSize: 22,
}


//------------------------------------------------------------------
// Component
//------------------------------------------------------------------


class App extends Component {
  constructor(props) {
     super(props);
      this.state = {
        length: 23,
        includeUppercase: false,
        includeSymbols: false,
        includeNumbers: false,
        password: '',
        copied: false
      };
    }

    handleLengthSlider(length) {
      this.setState({ length });
    }

    handleToggleUppercase() {
      this.setState({ includeUppercase: !this.state.includeUppercase });
    }

    handleToggleSymbols() {
      this.setState({ includeSymbols: !this.state.includeSymbols });
    }

    handleToggleNumbers() {
      this.setState({ includeNumbers: !this.state.includeNumbers });
    }

    handleMakePassword() {
      var options = {
        uppercase: this.state.includeUppercase,
        symbols  : this.state.includeSymbols,
        numbers  : this.state.includeNumbers
      };
      this.setState({
        password: passwordMaker(options, this.state.length)
      });
      document.querySelector("#password-display").style.visibility="visible";
      document.querySelector("#forge").style.backgroundColor='#057072'
      document.querySelector("#copy").style.backgroundColor='#FF3232'

    }

    handleTake() {
      this.setState({copied: true});
      document.querySelector("#password-display").style.visibility="hidden";
      document.querySelector("#forge").style.backgroundColor='#FF3232'
      document.querySelector("#copy").style.backgroundColor='#057072'


    }

    render() {
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="App">
            <nav>
            <a href="https://github.com/nfurfaro/Password-Forge-App">
              <FontAwesome
                  className='fa fa-github-square'
                  name='github'
                  size='2x'/></a>
            </nav>
            <img src={logo} alt="Logo" width="125px"/>
            <h1>Pass<wbr/>word Forge</h1>
            <h4>Artisanal passwords forged from unicorn horns</h4>
            <div>
              <div className="Slider" >
                <Slider className="Line"
                    sliderStyle={muiTheme}
                    min={4}
                    max={42}
                    step={1}
                    value={this.state.length}
                    onChange={(e, val) => {
                      this.handleLengthSlider.bind(this)(val)}
                    }/>
              </div>
              <h2>{`Password Length: ${this.state.length}`}</h2>
              <div className="Toggles" style={styles.block}>
                <Toggle
                  label="Uppercase"
                  thumbStyle={styles.thumbOff}
                  trackStyle={styles.trackOff}
                  thumbSwitchedStyle={styles.thumbSwitched}
                  trackSwitchedStyle={styles.trackSwitched}
                  labelStyle={styles.labelStyle}
                  defaultToggled={this.state.includeUppercase}
                  onToggle={this.handleToggleUppercase.bind(this)} />

                <Toggle
                  label="Symbols"
                  thumbStyle={styles.thumbOff}
                  trackStyle={styles.trackOff}
                  thumbSwitchedStyle={styles.thumbSwitched}
                  trackSwitchedStyle={styles.trackSwitched}
                  labelStyle={styles.labelStyle}
                  defaultToggled={this.state.includeSymbols}
                  onToggle={this.handleToggleSymbols.bind(this)} />

                <Toggle
                  label="Numbers"
                  thumbStyle={styles.thumbOff}
                  trackStyle={styles.trackOff}
                  thumbSwitchedStyle={styles.thumbSwitched}
                  trackSwitchedStyle={styles.trackSwitched}
                  labelStyle={styles.labelStyle}
                  defaultToggled={this.state.includeNumbers}
                  onToggle={this.handleToggleNumbers.bind(this)}/>
              </div>
            </div>

            <RaisedButton
              style={buttonStyle}
              labelStyle={labelStyle}
              id="forge"
              label="Forge"
              backgroundColor='#FF3232'
              labelColor="#7FFFFF"
              onClick={this.handleMakePassword.bind(this)}></RaisedButton>

            <h3 id="password-display">{this.state.password}</h3>&nbsp;

            <CopyToClipboard text={this.state.password}>
              <RaisedButton
              style={buttonStyle}
              labelStyle={labelStyle}
              id="copy"
              className="Copy"
              label="Copy"
              backgroundColor="#006A6C"
              labelColor="#7FFFFF"
              onClick={this.handleTake.bind(this)}/>
            </CopyToClipboard>&nbsp;


          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
