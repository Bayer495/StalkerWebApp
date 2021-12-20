var React = require('react');
var ReactDOM = require('react-dom');

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.selectMenu = this.selectMenu.bind(this);
    this.selectedId = "m_profile";
  }

  selectMenu(e) {

    var currentItem = document.getElementById(this.selectedId);
    currentItem.classList.remove('active');

    var id = e.target.id;
    var selectedItem = e.target;
    if (!id) {
      id = e.target.parentNode.id;
      selectedItem = e.target.parentNode;
    }

    this.selectedId = id;
    selectedItem.classList.add('active');
    document.getElementById("main");
    console.log(id);
  }

  exit() {
    var LoginDisplay = require('./LoginDisplay.jsx');
    ReactDOM.render(
      <LoginDisplay />,
      document.getElementById("main")
    )
  }

  viewProfiles() {
    var ProfilesDisplay = require('./ProfilesDisplay.jsx');
    ReactDOM.render(
      <ProfilesDisplay />,
      document.getElementById("main")
    )
  }


  render() {
    return <div>
      <div class="dropdown border-top">
        <a href="#"
          class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle" />
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
          <li><a class="dropdown-item" onClick={this.viewProfiles} >Выбор профиля</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" onClick={this.exit} >Выход</a></li>
        </ul>
      </div>
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center" id="navbar">
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li class="nav-item">
          <a onClick={this.selectMenu} id="m_profile" class="nav-link active py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-original-title="Home">
            <img width="50px" height="50px" src="./public/res/versila.jpg" />
          </a>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li class="nav-item">
          <a onClick={this.selectMenu} id="m_bag" class="nav-link py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-original-title="Home" >
            <img src="./public/res/ic_bag.png" />
          </a>
        </li>
        <li class="nav-item">
          <a onClick={this.selectMenu} id="m_consumable" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-original-title="Dashboard">
            <img src="./public/res/ic_consumable.png" />
          </a>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li class="nav-item">
          <a onClick={this.selectMenu} id="m_weapon" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-original-title="Orders">
            <img src="./public/res/ic_weapon.png" />
          </a>
        </li>
        <li class="nav-item">
          <a onClick={this.selectMenu} id="m_mods" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-original-title="Products">
            <img src="./public/res/ic_mods.png" />
          </a>
        </li>
        <li class="nav-item">
          <a onClick={this.selectMenu} id="m_armor" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-original-title="Customers">
            <img src="./public/res/ic_armor.png" />
          </a>
        </li>
        <li class="nav-item">
          <a onClick={this.selectMenu} id="m_equipments" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-original-title="Equipments">
            <img src="./public/res/ic_equipments.png" />
          </a>
        </li>
      </ul>
    </div>;
  }
}

module.exports = NavBar;