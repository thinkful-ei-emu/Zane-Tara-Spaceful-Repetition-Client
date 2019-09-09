import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (

        
        <nav>
        <span className="nav-username">{this.context.user.name}</span>
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>

    );
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to="/login">Login</Link>
        {' | '}
        <Link to="/register">Sign up</Link>
      </nav>
    );
  }

  render() {
    return (
      <header>
        <div className="nav-area">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
          <div className="hero-area">
          <Link className="h1link" to="/"><h1>Aprende Español</h1></Link>
          </div>

      </header>
    );
  }
}

export default Header;
