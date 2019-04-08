import React from 'react';
import './dropdown.style.css';
import notice from "../../../../assets/home/alert_off.png";
import alert from "../../../../assets/home/alrert_list.png";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
      <div className="dropdown" >

        <button className="notice-btn">
          <img src={notice} onClick={this.showDropdownMenu} className="notice_im" />
        </button>

        {this.state.displayMenu ? (
          <ul className="alert_ul">
            <li className="new_title">최근 알림</li>
            <li>
              <div className="alert_div">
                <img className="alert_img" src={alert}></img>
                <text className="alert_text">잠시 뒤 예정된 회의 "4월 간행물..."가 있습니다.</text>
                <text className="alert_time_text">방금</text>
              </div>

            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        ) :
          (
            null
          )
        }

      </div>

    );
  }
}

export default Dropdown;
