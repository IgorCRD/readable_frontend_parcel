import React from 'react';
import Navbar from './Navbar';
import Lorem from './Lorem';
import Container from './Container';

const App = () => (
    <div>
        <Navbar>
            <h1>Teste</h1>
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
        </Container>
    </div>
);

export default App;
