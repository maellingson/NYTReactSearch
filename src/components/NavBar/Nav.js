
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css';

class Nav extends Component {

  constructor(props) {
    super(props);

  }


  render() {

    return (
      <div>
        <nav>
          <div className="nav-wrapper #616161 grey darken-2">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><strong><a href="#" className="brand-logo center customNav">New York Times Headline Search</a></strong></li>
              <li><a onClick={() => window.location.replace("/")} style={{ "text-decoration": "none" }}>
              <i class="material-icons prefix">home</i></a></li>
              <li><NavLink to="/saved" style={{ "text-decoration": "none" }}>
                <i class="material-icons prefix">bookmarks</i>
                </NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}


export default Nav;