import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const CustomNavbar = styled(Navbar)`
    border-radius: 0 !important;
    margin-bottom: 0;
    padding-top: 15px;
    background-color: ${props => (props.transparent ? 'transparent' : 'rgba(52, 172, 220, 0.98)')};
    border-bottom: 1px solid transparent;
    border: 0;
    font-size: 16px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    color: #FFFFFF !important;

    border-bottom: ${props => (props.transparent ? '1px solid transparent' : '')};

    @media (max-width: 767px){
        -webkit-backface-visibility: hidden;
        padding-top: ${props => (props.transparent ? '0px' : '15px')};
        background-color: ${props => (props.transparent ? 'rgba(0, 0, 0, 0.98)' : 'rgba(52, 172, 220, 0.98)')}; 
    }

    .navbar-nav > li > a {
        padding: 10px 15px;
        margin: 15px 3px;
    }

    .navbar-brand, [class*="navbar-ct"] .navbar-brand {
        color: #FFFFFF;
        opacity: 0.9;
        filter: alpha(opacity=90);
    }
    
    .navbar-brand {
        font-weight: 600;
        margin: 5px 0px;
        padding: 20px 15px;
        font-size: 20px;
    }
`;
CustomNavbar.propTypes = { transparent: PropTypes.bool };

const NavbarPlaceHolder = styled.div`
    padding-bottom: ${props => `${props.height}px`};
    background-color: black;
`;

class NavbarTransparent extends Navbar {
    static propTypes = {
        children: PropTypes.arrayOf(PropTypes.object),
    }

    static defaultProps = {
        children: null,
    }

    state = {
        scrollTop: 0,
        height: 0,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', () => {
            this.setState({
                height: this.nav.nextElementSibling.clientHeight,
            });
        });
        this.setState({
            height: this.nav.nextElementSibling.clientHeight,
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            scrollTop: document.documentElement.scrollTop,
        });
    }

    render() {
        return (
            <Fragment>
                <NavbarPlaceHolder
                    height={this.state.height}
                    innerRef={(ref) => { this.nav = ref; }}
                />
                <CustomNavbar
                    fixedTop
                    transparent={this.state.scrollTop <= this.state.height / 3}
                >
                    { this.props.children }
                </CustomNavbar>
            </Fragment>
        );
    }
}

NavbarTransparent.Brand = styled(Navbar.Brand)`
    color: #FFFFFF !important;
    opacity: 0.9;
    filter: alpha(opacity=90);
    font-weight: 600;
    font-size: 20px;
    
    @media (max-width: 767px) {
        margin: 5px 0px;
        padding: 20px 15px;
    }
`;

NavbarTransparent.Toggle = styled(Navbar.Toggle)`
    > .icon-bar {
        background-color: #FFFFFF !important;
    }
    margin-top: 19px;
    margin-bottom: 19px;
    border: 0;

    @media (max-width: 767px) {
        margin-top: 17px;
        margin-bottom: 17px;
        width: 40px;
        height: 40px;
    }
`;

NavbarTransparent.Nav = styled(Nav)`

    > li > .dropdown-menu {
        border-radius: 10px;
        margin-top: -5px;
    }

    > li > a:not(.btn), .navbar-transparent .navbar-nav > li > a.btn-default, [class*="navbar-ct"] .navbar-nav > li > a:not(.btn), [class*="navbar-ct"] .navbar-nav > li > a.btn-default {
        color: #FFFFFF;
        border-color: #FFFFFF;
        opacity: 0.8;
        filter: alpha(opacity=80);
        -webkit-filter: alpha(opacity=80);

        &:hover {
            opacity: 1 !important;
        }
    }

    @media (max-width: 767px){
        > li > a, > li > a:hover, > li > a:focus, .open .dropdown-menu > li > a, .open .dropdown-menu > li > a:hover, .open .dropdown-menu > li > a:focus{
            opacity: .7;
            background: transparent;
        }

        .open .dropdown-menu > li > a {
            line-height: 20px;
        }

        .open .dropdown-menu > li > a, .open .dropdown-menu .dropdown-header {
            padding: 5px 15px 5px 25px;
        }
    }
    
    @media (min-width: 768px){
        > li.open > .dropdown-menu, .dropdown.open .dropdown-menu {
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -o-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
            -webkit-transform-origin: 29px -50px;
            -moz-transform-origin: 29px -50px;
            -o-transform-origin: 29px -50px;
            -ms-transform-origin: 29px -50px;
            transform-origin: 29px -50px;
            opacity: 1;
            filter: alpha(opacity=100);
            visibility: visible;
        }
        
        > li > .dropdown-menu, .dropdown .dropdown-menu {
            -webkit-transform: scale(0);
            -moz-transform: scale(0);
            -o-transform: scale(0);
            -ms-transform: scale(0);
            transform: scale(0);
            -webkit-transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
            -moz-transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
            -o-transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
            -ms-transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
            transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
            opacity: 0;
            filter: alpha(opacity=0);
            visibility: hidden;
            display: block;
        }

        > li > .dropdown-menu:after {
            border-bottom: 11px solid #FFFFFF;
            border-left: 11px solid transparent;
            border-right: 11px solid transparent;
            content: "";
            display: inline-block;
            position: absolute;
            left: 12px;
            top: -10px;
        }
    }
`;

NavbarTransparent.NavDropdown = styled(NavDropdown)`
    .dropdown-menu > li:first-child > a {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .dropdown-menu > li > a {
        background-color: white;
        padding: 8px 16px !important;
        color: #333333 !important;
    }

    @media (max-width: 767px){
        .dropdown-menu > li > a {
            padding: 5px 15px 5px 25px;
            opacity: .7;
            background: transparent;
            color: white !important;
        }
    }
`;

export default NavbarTransparent;
