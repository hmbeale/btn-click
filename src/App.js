import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function TemperatureVerdict(props) {
  if (props.celsius >= 35) {
    return <p>The temperature is too hot.</p>;
  }
  return <p>The temperature is not too hot.</p>;
}


class CoolTemperatureDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    if (temperature < 35){
      return (
        <div>
          {temperature} Celsius Im the cool temp display
        </div>
      );
    } return (
      <div>

      </div>
    )

  }
}

class HotTemperatureDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    if (temperature < 35){
      return (
        <div>

        </div>
      );
    } return (
      <div>
        {temperature} Celsius Im the hot temp display
      </div>
    )

  }
}

class BtnDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const log = this.props.btnLog;
    let divArray = [];
    divArray[0] = <div> {temperature} temp goes here </div>
    divArray[1] = <div> {temperature} temp goes here </div>

      return (
           <div>exactly {log} {temperature} freezing </div>
      );
  }
}


class TemperatureAdder extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("trying to add ten");
    this.props.onTemperatureAdd(e.target.value);
    this.props.onTemperatureAdd2(e.target.value);
  }



  render() {
    return (
      <button onClick = {this.handleClick}> add ten
      </button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.addTemp = this.addTemp.bind(this);
    this.updateLog = this.updateLog.bind(this);
    this.state = {temperature: 0, scale: 'c', btnLog : []};
  }

  addTemp(temperature){
    this.setState({temperature: this.state.temperature + 10 })
  }

  updateLog (btnLog){
    this.setState({btnLog: this.state.btnLog.concat("you pressed a button") })
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;


    return (
      <div>
        <TemperatureVerdict
          celsius={parseFloat(celsius)} />
        <CoolTemperatureDisplay
          temperature={celsius}
         />
         <HotTemperatureDisplay
           temperature={celsius}
          />
          <BtnDisplay
            temperature={celsius}
           />

        <TemperatureAdder
          onTemperatureAdd = {this.addTemp}
          onTemperatureAdd2 = {this.updateLog}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



export default App;
