import styled from "styled-components";


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color: #000;
    margin-bottom: 20px;
`

export const ContainerImagem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
`

export const ImageOferta = styled.img`
    height: 100%;
    opacity: 1.2;
`

export const TextOferta = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

export const Text = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #Bd8411;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
`

export const TextOn = styled.p`
    font-size: 40px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
`

export const TextOff = styled.p`
    font-size: 60px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
`

export const ButtonOferta = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #E4a36e;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);

    &:hover {
      background-color: #D48341;
    }
`

export const Container = styled.div`
    margin: 5px;
`

export const TitleOferta = styled.h2`
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    text-align: center;
`

export const Strong = styled.strong`
    font-family: 'Lato', sans-serif;
`

export const SubTitleOferta = styled.p`
    font-size: 17px;
    font-weight: 600;
    color: #fff;
`

export const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Input = styled.input`
    border: 1px solid #ccc;
    padding: 0 10px;
    margin: 20px;
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 2px solid #ccc;
    cursor: pointer;
    background-color: #000;
    color: #ccc;

    &:focus {
      outline: none;
    }
`


export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: #000;
    font-size: 14px;

    &:hover {
      background-color: #ddd;
    }
`