import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    height: 350px;
    width: 250px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    background-color: #5CABC4;
    margin: -40px 20px 20px 20px;
    border-radius: 20px;
    img {
        height: 150px;
        width: 150px;
        margin: 20px 0px 20px 0px;
    }
    button {
        height: 40px;
        width: 150px;
        background-color: #F2A922;
        margin: 20px 0px 10px 0px;
        border: 1px solid #F1A822;
        border-radius: 20px;
    }
`