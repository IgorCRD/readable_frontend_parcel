import React from 'react';
import { NavItem, MenuItem } from 'react-bootstrap';
import CustomBootstrapNavbar from './CustomBootstrapNavbar';

const ReadableNavbar = () => (
    <CustomBootstrapNavbar fixedTop padd>
        <CustomBootstrapNavbar.Header>
            <CustomBootstrapNavbar.Brand>
                <a href="#brand">Readable</a>
            </CustomBootstrapNavbar.Brand>
            <CustomBootstrapNavbar.Toggle />
        </CustomBootstrapNavbar.Header>
        <CustomBootstrapNavbar.Collapse>
            <CustomBootstrapNavbar.Nav>
                <NavItem eventKey={1} href="#">
                    Link
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Link
                </NavItem>
            </CustomBootstrapNavbar.Nav>
            <CustomBootstrapNavbar.Nav pullRight>
                <CustomBootstrapNavbar.NavDropdown
                    eventKey={3}
                    title="Dropdown"
                    id="basic-nav-dropdown"
                >
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </CustomBootstrapNavbar.NavDropdown>
            </CustomBootstrapNavbar.Nav>
        </CustomBootstrapNavbar.Collapse>
    </CustomBootstrapNavbar>
);

export default ReadableNavbar;
