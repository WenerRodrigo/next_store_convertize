import styled from "styled-components";



export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    flex-wrap: wrap;
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
`

export const TitleProducts = styled.h1`
    font-size: 22px;
    font-family: 'Lato', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 15px;
`

export const TitleStyle = styled.span`
    border: 1px solid #eee;
    width: 62%;
    margin-top: auto;
`

export const CardContent = styled.div`
    position: relative;
    border: 1px solid transparent;
    width: 260px;
    height: 400px;
    border-radius: 5px;

    &:hover {
        border: 1px solid #ccc;
        box-shadow: 0 0 4px #ccc;
    }
`

export const ImagemCard = styled.img`
    margin-top: 30px;
    width: 150px;
    height: 150px;
`

export const Discount = styled.p`
    position: absolute;
    top: 0;
    right: 6px;
    color: red;
    font-size: 17px;
    font-weight: bold;
`

export const DescriptionProduct = styled.p`
    font-size: 15px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
`

export const ContentStar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
`

export const CurrentPrice = styled.p`
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-decoration: line-through;
    color: #999;
    margin-top: auto;
`

export const Installments = styled.span`
    font-size: 12px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    color: #000;
    margin-top: auto;
`

export const Price = styled.p`
    font-size: 15px;
    font-family: 'Lato', sans-serif;
    margin-top: auto;
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
`

