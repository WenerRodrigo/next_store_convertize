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
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 30px;
  width: 40%;
`;


export const Login = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    `;


export const Icon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
`