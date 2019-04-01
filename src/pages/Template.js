import React from 'react';
import { NavLink as RNavLink, Link} from 'react-router-dom';
import { Container } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Template extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header id="header">
      <div className="container">
        <div id="logo" className="pull-left">
          <Link to='/'>
            <img src={require('../Images/ELLE/ELLE-Background-Full.png')}
                 alt="ELLE Ultimate" title="Home" className="mainLogoStyle"/>
          </Link>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li><Link to='/downloads'>Download</Link></li>
            <li><Link to='/decks'>Decks</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/userlist'>User List</Link></li>
            <li><Link to='/logout'>Signout</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    );
  }
}
