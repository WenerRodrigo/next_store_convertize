import { FaTruckFast } from "react-icons/fa6";
import styled from "styled-components";


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: #216633;

    @media (max-width: 320px) {
        height: 35px;
        width: 100%;
    }

    @media (max-width: 375px) {
        height: 40px;
    }

    @media (max-width: 425px) {
        height: 35px;
    }
`

export const Description = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;

    @media (max-width: 320px) {
       font-size: 12px;
    }

    @media (max-width: 375px) {
        font-size: 12px;
        width: 100%;
    }

    @media (max-width: 425px) {
        font-size: 12px;
        width: 100%;
    }
`

export const StyledIcon = styled(FaTruckFast)`
    font-size: 20px;
`

