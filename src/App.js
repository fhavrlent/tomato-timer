import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './App.css';

const App = class extends React.Component {
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
    const { props: { children } } = this;

    return (
      <div>
        <header>
          <div>
            <Navbar color="light" light fixed="top" expand="sm">
              <NavbarBrand href="/">
                <span role="img" aria-label="tomato-emoji">
                  🍅
                </span>{' '}
                Tomato Timer
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/settings/">Settings</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/stats/">Stats</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </header>
        <main>{children}</main>
      </div>
    );
  }
};

export default App;
