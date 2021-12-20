var React = require('react');
var ProfilesDisplay = require('./ProfilesDisplay.jsx');
var ReactDOM = require('react-dom');

class LoginDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = { class: "off", label: "Вход" };
    this.press = this.press.bind(this);
  }

  press() {
    ReactDOM.render(
      <ProfilesDisplay />,
      document.getElementById("main")
    )
  }

  render() {
    return <div>
      <input type="text" placeholder="Логин" /> <br />
      <input type="password" placeholder="Пароль" /> <br />
      <button onClick={this.press} className={this.state.class}>{this.state.label}</button>

    </div>;
  }
}

module.exports = LoginDisplay;