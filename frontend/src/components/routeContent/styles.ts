import styled from "styled-components";
import { Link } from "react-router-dom";


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 10px;

    @media (max-width: 320px) {
        width: 100%;
    }

    @media (max-width: 375px) {
        width: 150vh;
    }
`

export const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: #000;

    &:hover {
        color: red;
    }

    @media (max-width: 320px) {
        font-size: 12px;
    }

    @media (max-width: 375px) {
        font-size: 14px;
    }

`


