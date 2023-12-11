import styled from "styled-components";

export const BoxContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #f4f4f4;

    @media (max-width: 320px) {
        width: 100%;
    }

    @media (max-width: 375px) {
        width: 100%;
    }

    @media (max-width: 425px) {
        width: 100%;
    }
`


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;

    @media (max-width: 320px) {
        flex-direction: column;
    }

    @media (max-width: 375px) {
        flex-direction: column;
        padding: 10px;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        padding: 10px;
    }
`

export const CaixaContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`

export const Container = styled.div`
    width: 100%;
    height: 200px;
    text-align: center;
    margin-top: 10px;
`

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 400;
    font-family: 'lato',sans-serif;
    margin-bottom: 10px;
`

export const Contato = styled.span`
    font-size: 14px;
    font-weight: 400;
    font-family: 'Lato',sans-serif;
`

export const Description = styled.li`
    font-size: 15px;
    font-weight: 700;
    font-family: 'Roboto',sans-serif;
    margin-bottom: 10px;
    list-style: none;
`

export const ContentDescription = styled.ul`
    margin-top: 10px;
    text-align: center;
    padding: 0;
`

export const RedeSocial = styled.img`
    margin: 3px;
    cursor: pointer;

    @media (max-width: 320px) {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 375px) {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 425px) {
        width: 40px;
        height: 40px;
    }
`