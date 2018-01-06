import React from 'react';
import { NavItem, MenuItem } from 'react-bootstrap';
import Navbar from './Navbar';
import Lorem from './Lorem';
import Container from './Container';

const App = () => (
    <div>
        <Navbar fixedTop padd>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">Readable</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                </Navbar.Nav>
                <Navbar.Nav pullRight>
                    <Navbar.NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </Navbar.NavDropdown>
                </Navbar.Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container>
            <Lorem Title="Lorem ipsum" />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
        </Container>
    </div>
);

export default App;
