import React from "react";
import * as S from "./styles";

const oferta = require('../../assets/oferta_img.jpg')

export const Register = () => {

    const handleClick = () => {
        alert('Cadastro realizado com sucesso!')
    }

    return (
        <>
            <S.ContainerImagem>
                <S.ImageOferta src={oferta} alt="Imagem Oferta" />
                <S.TextOferta>
                    <S.Text>BONÉS NEXTSTORE</S.Text>
                    <S.TextOn>Compre 1</S.TextOn>
                    <S.TextOff>Leve 2</S.TextOff>
                    <S.ButtonOferta>Eu Quero</S.ButtonOferta>
                </S.TextOferta>
            </S.ContainerImagem>
            <S.Content>
                <S.Container>
                    <S.TitleOferta><S.Strong>GANHE R$ 10</S.Strong> NA PRIMEIRA COMPRA</S.TitleOferta>
                    <S.SubTitleOferta>Válido para compras acima de R$ 499</S.SubTitleOferta>
                </S.Container>

                <S.ContainerInput>
                    <S.Input
                        type="text"
                        placeholder="Qual seu nome?"
                    />
                    <S.Input
                        type=""
                        placeholder="Digite aqui seu email?"
                    />
                    <S.Button onClick={handleClick}>Cadastrar</S.Button>
                </S.ContainerInput>
            </S.Content>
        </>
    )
}