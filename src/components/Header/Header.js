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
        <Link to="/"><span className="nav-username">{this.context.user.name}</span></Link>
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
        <div role="navigation" className="nav-area">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
          <div className="hero-area">
          <h1 lang="es">Aprende Español</h1>
          </div>

      </header>
    );
  }
}

export default Header;
