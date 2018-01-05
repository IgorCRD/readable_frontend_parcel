import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';

const CustomNavbar = styled(Navbar)`
    border-radius: 0 !important;
    margin-bottom: 0;
    padding-top: 15px;
    border-bottom: 1px solid transparent;
    border: 0;
    font-size: 16px;
    color: #FFFFFF !important;
    opacity: 0.9;
    filter: alpha(opacity=90);
    transition: all 0.4s;
    -webkit-transition: all 0.4s;

    padding-top: ${props => (props.transparent ? '15px' : '0px')};
    border-bottom: ${props => (props.transparent ? '1px solid transparent' : '')};
    background-color: ${props => (props.transparent ? 'transparent' : 'rgba(52, 172, 220, 0.98)')};

    @media (max-width: 767px){
        background-color: ${props => (props.transparent ? 'rgba(0, 0, 0, 0.98)' : 'rgba(52, 172, 220, 0.98)')}; 
    }

    li * {
        background-color: transparent;
        border-radius: 3px;
        color: #FFFFFF !important;
        opacity: 1;
        filter: alpha(opacity=100);
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
            <div>
                <NavbarPlaceHolder
                    height={this.state.height}
                    innerRef={(ref) => { this.nav = ref; }}
                />
                <CustomNavbar
                    fixedTop
                    transparent={this.state.scrollTop <= this.state.height / 2}
                >
                    { this.props.children }
                </CustomNavbar>
            </div>
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

export default NavbarTransparent;
