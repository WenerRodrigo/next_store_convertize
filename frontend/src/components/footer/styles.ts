import styled from 'styled-components';

export const BoxRodape = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`

export const ContentRodape = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;

    @media (max-width: 320px) {
        flex-direction: column;
    }

    @media (max-width: 375px) {
        flex-direction: column;
    }

    @media (max-width: 425px) {
        flex-direction: column;
    }
`


export const SubTitleFooter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    /* @media (max-width: 320px) {
        height: 80px;
    } */
`

export const TitleCard = styled.h3`
    font-size: 20px;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    padding: 0 10px;

    @media (max-width: 320px) {
        font-size: 16px;
    }

    @media (max-width: 375px) {
        font-size: 16px;
    }

    @media (max-width: 425px) {
        font-size: 16px;
    }    

`

export const CnpjFooter = styled.p`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: auto;
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 320px) {
        font-size: 13px;
        padding: 10px;
    }

    @media (max-width: 375px) {
        font-size: 14px;
        padding: 10px;
    }

    @media (max-width: 425px) {
        font-size: 14px;
        padding: 10px;
    }
`

export const DescriptionText = styled.p`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    padding: 0 10px;

    @media (max-width: 320px) {
        font-size: 13px;
        padding: 10px;
    }

    @media (max-width: 375px) {
        font-size: 14px;
        padding: 10px;
    }

    @media (max-width: 425px) {
        font-size: 14px;
        padding: 10px;
    }
`


export const ContainerImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 10px;

    @media (max-width: 320px) {
        width: 100%;
        flex-direction: column;
    }

    @media (max-width: 375px) {
        width: 100%;
        flex-direction: column;
    }

    @media (max-width: 425px) {
        width: 100%;
        flex-direction: column;
    }
`

export const ContainerCertificado = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 10px;
    margin-top: 10px;
`

export const ImagePagamento = styled.img`
    width: 400px;
    height: 150px;

    @media (max-width: 320px) {
        width: 330px;
        height: 170px;
    }

    @media (max-width: 375px) {
        width: 330px;
        height: 170px;
    }

    @media (max-width: 425px) {
        width: 330px;
        height: 170px;
    }
`

export const ImageCertifacado = styled.img`
    width: 400px;
    height: 150px;

    @media (max-width: 320px) {
        width: 300px;
        height: 140px;
    }

    @media (max-width: 375px) {
        width: 300px;
        height: 140px;
    }

    @media (max-width: 425px) {
        width: 300px;
        height: 140px;
    }
`

export const ContentFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #ccc;
    padding-top: 10px;
    bottom: 0;
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const ImagemFooter = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;

    @media (max-width: 320px) {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 375px) {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 425px) {
        width: 50px;
        height: 50px;
    }
`

export const DescriptionFooter = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: #ccc;
    margin: 0 10px;

    @media (max-width: 320px) {
        font-size: 12px;
    }

    @media (max-width: 375px) {
        font-size: 12px;
    }

    @media (max-width: 425px) {
        font-size: 14px;
    }
`

export const Description = styled.p`
    font-size: 20px;
    font-weight: 300;
    font-family: 'Lato', sans-serif;
    margin: 0 auto;

    @media (max-width: 320px) {
        font-size: 14px;
    }

    @media (max-width: 375px) {
        font-size: 15px;
    }

    @media (max-width: 425px) {
        font-size: 16px;
    }
`