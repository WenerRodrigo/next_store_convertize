import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    width: 100%;
    padding: 10px; 
    border-bottom: 1px solid #ccc;
`;

export const InputContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 2px solid #000;
    cursor: pointer;

    &:focus {
      outline: none;
    }
`;

export const IoMdSearchIcon = styled(IoMdSearch)`
    position: absolute;
    width: 18px;
    height: 20px;
    right: 0;
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 30px;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: bold;
    letter-spacing: 3px;
    width: 40%;
`;

export const Imagem = styled.img`
    width: 50px;
`


export const Login = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    `;


