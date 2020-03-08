import React from 'react';

import { VideoBlock } from './styles';
import { Header } from './Header';
import { Service } from './Services';
export const Home = () => {
    return(
        <>
            <Header></Header>
            <VideoBlock></VideoBlock>
            <Service/>
        </>
    )
}