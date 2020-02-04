import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";


class NavBar extends Component {

  signOut = (e) => {
    const { history } = this.props.propsData;
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    history.push('/sign-in');
  }
  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to='/sign-in' />
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link className="nav-link" to={"/home"}>Home</Link>
            </li>
          </ul>
          <div className="dropdown header-dropdown">
            <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Account
              </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="nav-link" to={"/edit"}>Edit Profile</Link>
              <Link className="nav-link" to={"/change-password"}>Change Password</Link>
              <div className="dropdown-divider"></div>
              <button className="logout-button" onClick={() => this.signOut()}>Logout</button>
            </div>
          </div>
        </div>
      </nav>

    );
  }
}

export default NavBar;