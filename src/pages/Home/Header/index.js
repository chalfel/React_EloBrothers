import React from 'react';

import { Navbar } from './Navbar';
import Logo from '../../../imgs/logo.png';

import { Container } from './styles.js';

export const Header = () => {
    return(
        <>
            <Container>
                <img src={Logo} alt="site-logo"></img>
                <Navbar />
            </Container>
        </>
    )
}