import styled from "styled-components";
import { Link } from "react-router-dom";


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 10px;
`

export const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: #000;

    &:hover {
        color: red;
    }

`


