import React from 'react';

import { Nav } from './styles.js';

export const Navbar = () => {
    return(
        <Nav>
            <div className="nav-items">
                <b className="text">INÍCIO</b>
                <b className="text">SERVIÇOS</b>
                <b className="text">TRABALHE CONOSCO</b>
                <b className="text">CONTATO</b>
            </div>
        </Nav>
    )
}