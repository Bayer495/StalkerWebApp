var React = require('react');
var ReactDOM = require('react-dom');

class ProfileDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.press = this.press.bind(this);
    }

    press() {
      alert("ProfileDisplay press");
      console.log("press()");
    }

    render() {
      return <div>
        <p>Имя: {this.props.name}</p>
        <p>HP: {this.props.hp}</p>
        <p>Защита: {this.props.def}</p>
        <p>Атака: {this.props.ap}</p>
        <p>Деньги: {this.props.cash} <input type="button" value="Добавить" onClick={this.press} /></p>
        <p>Репутация: {this.props.reputation}</p>
        <p>Шагов по зоне: {this.props.step}</p>
        <p>Бонус в локации: {this.props.location_step}</p>
        <p>Уклонение: {this.props.dodge}</p>
        <p>Смывка: {this.props.steals}</p>
        <p>Аптечки: {this.props.medicaments}</p>
        <p>Стимуляторы: {this.props.stimulators}</p>
        <p>Гранаты: {this.props.granades}</p>
      </div>;
    }
  }  

  module.exports = ProfileDisplay;