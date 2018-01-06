import styled from 'styled-components';

const Container = styled.div`
    padding-right: ${props => (props.fullWidth ? '0px;' : '15px')};
    padding-left: ${props => (props.fullWidth ? '0px;' : '15px')};

    margin-right: auto;
    margin-left: auto;

    :after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: table;
        content: ' ';
        clear: both;
    }
    :before {
        display: table;
        content: ' ';
    }

    @media (min-width: 768px) {
        width: ${props => (props.fullWidth ? '100%;' : '750px;')};
    }
    @media (min-width: 992px) {
        width: ${props => (props.fullWidth ? '100%;' : '970px;')};
    }
    @media (min-width: 1200px) {
        width: ${props => (props.fullWidth ? '100%;' : '1170px;')};
    }
`;

export default Container;
