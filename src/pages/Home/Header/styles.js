import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 650px) {
        flex-direction: column;

        img {
            height: 60%;
            width: 60%;
            margin: 20px 10px 20px 10px;
        }
    }
`;