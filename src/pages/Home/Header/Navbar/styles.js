import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 1000px;

    .text {
        font-weight: bold;
        margin: 0px 20px 0px 20px;
        color: white;
        font-size: 20px;
        text-align: center;
    }

    .text:hover {
        border-bottom: 2px solid #444422;
    }

    .nav-items {
        justify-self:center;
        height: 20px;
    }
    @media screen and (max-width: 650px) {
        width: 200px;

        .nav-items {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-self:center;
        height: 20px;
        }

        .text {
            margin: 5px 0px 5px 0px;
        }
    }
`

export {
    Nav,
}