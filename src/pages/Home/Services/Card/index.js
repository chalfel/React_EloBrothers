import React from 'react';

import { Container } from './styles';
import Icon from '../../../../imgs/icon1.png';

export const Card = ({ info }) => {
    return(
        <>
            <Container>
                <p>{info.toUpperCase()}</p>
                <img alt="icon" src={Icon}></img>
                <button></button>
            </Container>
        </>
    );
}