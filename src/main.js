
var React = require('react');
var ReactDOM = require('react-dom');

class Start extends React.Component {
  render() {
    return (
      <button className="start">
        {this.props.value}
      </button>
    )
  }
}

class Gate extends React.Component {
  render() {
    return (
      <button className="gate">
        {this.props.value}
      </button>
    )
  }
}

class Simulator extends React.Component {
  render() {
    return (
      <div className="simulator">
        <div className="line">
          <Gate value='H'/>
          <Gate value='I'/>
          <Gate/>
          <Gate/>
          <Gate/>
        </div>
        <Start value='|0⟩'/>
        <div className="line">
          <Gate/>
          <Gate value='H'/>
          <Gate/>
          <Gate/>
          <Gate/>
        </div>
        <Start value='|1⟩'/>
        <div className="line">
          <Gate/>
          <Gate/>
          <Gate/>
          <Gate/>
          <Gate/>
        </div>
        <Start value='|1⟩'/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Simulator />,
  document.getElementById('interface')
);