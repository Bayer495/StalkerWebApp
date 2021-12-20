var React = require('react');
var ReactDOM = require('react-dom');

class ProfilesDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);

        var profile1 = JSON.parse("{ \"Id\": 1, \"Name\": \"Верзила\", \"Cash\": 3000, \"CurrentHP\": 50, \"MaxHP\": 100, \"Reputation\": 0, \"ApBonus\": 2, \"ArmorBonus\": 1, \"MedicBonus\": 0, \"MapLocationBonus\": 0, \"MaxGrenades\": 5, \"MaxStimulants\": 5, \"Head\": 2, \"Chest\": 2, \"Inventory\": { \"Head\": { \"Name\": \"Head\", \"Price\": 100, \"Type\": \"HEAD\", \"DefenceValue\": 2 }, \"Chest\": { \"Name\": \"Chest\", \"Price\": 100, \"Type\": \"CHEST\", \"DefenceValue\": 2 }, \"Weapon\": { \"AttackPoints\": { \"Dice\": 2, \"Bonus\": 1 }, \"Mods\": [ { \"Name\": \"Mod1\", \"Price\": 100, \"Type\": \"MOD1\" } ] } } }");
        var profile2 = JSON.parse("{ \"Id\": 2, \"Name\": \"Верзила\", \"Cash\": 5000, \"CurrentHP\": 50, \"MaxHP\": 100, \"Reputation\": 1, \"ApBonus\": 2, \"ArmorBonus\": 1, \"MedicBonus\": 0, \"MapLocationBonus\": 0, \"MaxGrenades\": 5, \"MaxStimulants\": 5, \"Head\": 2, \"Chest\": 2, \"Inventory\": { \"Head\": { \"Name\": \"Head\", \"Price\": 100, \"Type\": \"HEAD\", \"DefenceValue\": 2 }, \"Chest\": { \"Name\": \"Chest\", \"Price\": 100, \"Type\": \"CHEST\", \"DefenceValue\": 2 }, \"Weapon\": { \"AttackPoints\": { \"Dice\": 2, \"Bonus\": 1 }, \"Mods\": [ { \"Name\": \"Mod1\", \"Price\": 100, \"Type\": \"MOD1\" } ] } } }");

        this.profiles = [profile1, profile2];
    }

    select() {
        var ProfileDisplay = require('./ProfileDisplay.jsx');
        ReactDOM.render(
            <ProfileDisplay />,
            document.getElementById("main")
        )
    }

    render() {
        return <div>
            <p>Здесь будут профили</p>
            <input type="button" value="Выбрать профиль" onClick={this.select} />
        </div>;
    }
}

module.exports = ProfilesDisplay;