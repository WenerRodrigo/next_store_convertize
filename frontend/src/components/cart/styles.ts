import styled from "styled-components";

export const ContentCart = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;

   
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
        width: 30px;
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
        width: 20px;
        font-size: 10px;
        right: 9px;
    }
`;