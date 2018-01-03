import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from './Container';

const NavbarPlaceHolder = styled.div`
    padding-bottom: ${props => `${props.height}px`};
`;

const NavbarStyled = styled.nav`
    padding-top: ${props => (props.transparent ? '15px' : '0px')};
    border-bottom: ${props => (props.transparent ? '1px solid transparent' : '')};
    border-radius: 0 !important;
    border-width: 0 0 1px;
    border: 0;
    margin-bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    position: fixed;
    min-height: 50px;

    background-color: ${props => (props.transparent ? 'transparent' : 'rgba(52, 172, 220, 0.98)')};
    
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    
    -webkit-transition: all 300ms linear;
    -moz-transition: all 300ms linear;
    -o-transition: all 300ms linear;
    -ms-transition: all 300ms linear;
    transition: all 300ms linear; 

    font-family: "Helvetica Neue","Open Sans",Arial,sans-serif;
    font-size: 16px;

    :before {
        display: table;
        content: " ";
    }

    :after {
        display: table;
        content: " ";
        clear: both;
    }
    
    @media (max-width: 767px){
        padding-top: 0px;
        background-color: ${props => (props.transparent ? 'rgba(0, 0, 0, 0.45)' : 'rgba(52, 172, 220, 0.98)')}; 
    }

    @media (min-width: 768px) {
        border-radius: 4px;
    }
`;

class Navbar extends React.Component {
    static propTypes = {
        children: PropTypes.object,
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
        this.setState({
            height: this.nav.clientHeight,
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
            <Container fullWidth>
                <NavbarPlaceHolder height={this.state.height} />
                <NavbarStyled
                    transparent={this.state.scrollTop <= 260}
                    innerRef={(ref) => { this.nav = ref; }}
                >
                    <Container>
                        { this.props.children }
                    </Container>
                </NavbarStyled>
            </Container>
        );
    }
}

export default Navbar;
