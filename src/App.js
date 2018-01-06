import React, { Fragment } from 'react';
import ReadableNavbar from './components/ReadableNavbar';
import Lorem from './components/Lorem';
import Container from './components/Container';

const App = () => (
    <Fragment>
        <ReadableNavbar />
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
    </Fragment>
);

export default App;
