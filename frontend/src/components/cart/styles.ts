import styled from "styled-components";

export const ContentCart = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;

   @media (max-width: 320px) {
        height: 10px;
    }

    @media (max-width: 375px) {
        height: 10px;
    }

    @media (max-width: 425px) {
        height: 10px;
    }
`;


export const Icon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media (max-width: 320px) {
        width: 25px;
    }

    @media (max-width: 375px) {
        width: 25px;
    }

    @media (max-width: 425px) {
        width: 27px;
    }
`;

export const ItensCart = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: #000;
    width: 20px;
    border-radius: 10px;
    color: #fff;
    top: 0;
    right: 0;
    font-size: 14px;

    @media (max-width: 320px) {
        width: 12px;
        height: 12px;
        font-size: 8px;
        right: 9px;
    }

    @media (max-width: 375px) {
        width: 12px;
        height: 12px;
        font-size: 8px;
        right: 9px;
    }

    @media (max-width: 425px) {
        width: 12px;
        height: 12px;
        font-size: 8px;
        right: 9px;
    }
`;