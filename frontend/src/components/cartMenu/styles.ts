import styled from "styled-components";


export const ContentCartMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 350px;
    height: 100%;
    background-color: #0b4e06;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`

export const IconClose = styled.p`
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const TotalCart = styled.span`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
`

export const Button = styled.button`
    position: absolute;
    background-color: #fff;
    font-size: 15px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    bottom: 30px;
    cursor: pointer;
`