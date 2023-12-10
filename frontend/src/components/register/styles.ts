import styled from "styled-components";

export const BoxContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    @media (max-width: 320px) {
        width: 100%;
    }
`


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
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
    width: 80%;
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

    @media (max-width: 320px) {
        font-size: 13px;
    }
`

export const TextOn = styled.p`
    font-size: 40px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);

    @media (max-width: 320px) {
        font-size: 18px;
    }
`

export const TextOff = styled.p`
    font-size: 60px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);

    @media (max-width: 320px) {
        font-size: 25px;
    }
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

    @media (max-width: 320px) {
        font-size: 12px;
        height: 22px;
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

    @media (max-width: 320px) {
        font-size: 13px;
    }
`

export const Strong = styled.strong`
    font-family: 'Lato', sans-serif;
`

export const SubTitleOferta = styled.p`
    font-size: 17px;
    font-weight: 600;
    color: #fff;

    @media (max-width: 320px) {
        font-size: 13px;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 320px) {
        flex-direction: column;
        width: 90%;
    }
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

    @media (max-width: 320px) {
        width: 60%;
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

    @media (max-width: 320px) {
        width: 50%;
        font-size: 12px;
        height: 24px;
        margin-bottom: 5px;;
    }
`