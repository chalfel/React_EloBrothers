import React, { useState, useEffect } from 'react';

import { Card } from './Card';

import { Container } from './styles';

export const Service = ({ serviceList }) => {
    const [ services, setServices ] = useState([]);
    useEffect(() => {
        setServices(['Elo Boost', 'Elo Coach', 'Elo Job', 'Teste', 'Teste2'])
    } ,[])
    return(
        <Container>
            { services.map( service => <Card info={service} key={service}/>) }
        </Container>
    );
}