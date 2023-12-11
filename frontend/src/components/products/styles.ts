import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 320px) {
        padding: 0;
        width: 100%;
    }

    @media (max-width: 375px) {
        padding: 0;
        width: 100%;
    }

    @media (max-width: 425px) {
        padding: 0;
        width: 100%;
    }
`


export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 10px;
    margin: 10px;
    width: 80%;
    text-align: center;

    @media (max-width: 320px) {
        padding: 0;
        width: 100%;
    }

    @media (max-width: 375px) {
        padding: 0;
        width: 100%;
    }

    @media (max-width: 425px) {
        padding: 0;
        width: 100%;
    }
`

export const TitleProducts = styled.h1`
    font-size: 22px;
    font-family: 'Lato', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 15px;

    @media (max-width: 320px) {
        width: 80%;
        font-size: 12px;
    }

    @media (max-width: 375px) {
        width: 80%;
        font-size: 13px;
    }

    @media (max-width: 425px) {
        width: 60%;
        font-size: 15px;
    }
`

export const TitleStyle = styled.span`
    border: 1px solid #eee;
    width: 62%;
    margin-top: auto;

    @media (max-width: 320px) {
        width: 100px;
    }

    @media (max-width: 375px) {
        width: 100px;
    }

    @media (max-width: 425px) {
        width: 150px;
    }
`

export const CardContent = styled.div`
    position: relative;
    border: 1px solid transparent;
    width: 250px;
    height: 400px;
    border-radius: 5px;

    &:hover {
        border: 1px solid #ccc;
        box-shadow: 0 0 4px #ccc;
    }

    @media (max-width: 320px) {
        width: 180px;
        height: 320px;
    }

    @media (max-width: 375px) {
        width: 200px;
        height: 350px;
    }
`

export const ImagemCard = styled.img`
    margin-top: 30px;
    width: 150px;
    height: 150px;

    @media (max-width: 320px) {
        width: 100px;
        height: 100px;
    }

    @media (max-width: 375px) {
        width: 110px;
        height: 110px;
    }
`

export const Discount = styled.p`
    position: absolute;
    top: 0;
    right: 6px;
    color: red;
    font-size: 17px;
    font-weight: bold;

    @media (max-width: 320px) {
        font-size: 12px;
    }

    @media (max-width: 375px) {
        font-size: 15px;
    }
`

export const DescriptionProduct = styled.p`
    font-size: 15px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;

    @media (max-width: 320px) {
        font-size: 12px;
    }

    @media (max-width: 375px) {
        font-size: 12px;
    }
`

export const ContentStar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;

    @media (max-width: 320px) {
        gap: 2px;
    }

    @media (max-width: 375px) {
        gap: 2px;
    }
`

export const CurrentPrice = styled.p`
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-decoration: line-through;
    color: #999;
    margin-top: auto;

    @media (max-width: 320px) {
        font-size: 12px;
    }

    @media (max-width: 375px) {
        font-size: 13px;
    }
`

export const Installments = styled.span`
    font-size: 12px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    color: #000;
    margin-top: auto;

    @media (max-width: 320px) {
        font-size: 10px;
    }

    @media (max-width: 375px) {
        font-size: 12px;
    }
`

export const Price = styled.p`
    font-size: 15px;
    font-family: 'Lato', sans-serif;
    margin-top: auto;

    @media (max-width: 320px) {
        font-size: 12px;
    }

    @media (max-width: 375px) {
        font-size: 12px;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: #0b7904;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin-top: auto;
    border: none;
    border-radius: 5px;
    cursor: pointer;


    &:hover {
        background-color: #0b7904;
        opacity: 0.8;
    }

    @media (max-width: 320px) {
        font-size: 10px;
        width: 40%;
        height: 30px;
        margin-left: 30%;
    }

    @media (max-width: 375px) {
        font-size: 10px;
        width: 43%;
        height: 30px;
        margin-left: 30%;
    }

    @media (max-width: 425px) {
        font-size: 13px;
        width: 45%;
        height: 30px;
        margin-left: 30%;
    }
`


export const Loanding = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    color: #000;
    margin-top: 20px;
`

