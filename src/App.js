import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import FontAwesome from 'react-fontawesome';
import './resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import passwordMaker from 'password-maker';
import CopyToClipboard from 'react-copy-to-clipboard';


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
  constructor(props) {
     super(props);
      this.state = {
        length: 23,
        includeUppercase: true,
        includeSymbols: true,
        includeNumbers: true,
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
      document.querySelector("#password-display").style.visibility="visible"
    }

    handleCopy() {
      this.setState({copied: true});
      document.querySelector("#password-display").style.visibility="hidden";

    }

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
              label="New"
              backgroundColor='#FF3232'
              labelColor="#7FFFFF"
              onClick={this.handleMakePassword.bind(this)}/>

            <h3 id="password-display">{this.state.password}</h3>&nbsp;

            <CopyToClipboard text={this.state.password}>
              <RaisedButton
                className="Copy"
                label="Copy"
                backgroundColor="#006A6C"
                labelColor="#7FFFFF"
                onClick={this.handleCopy.bind(this)}/>
            </CopyToClipboard>&nbsp;

          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
