import React from 'react';
import { BsHandbag } from "react-icons/bs";
import * as S from './styles';

const logo = require('../../assets/mascara-africana.png');


export const ContentHeader = () => {
    return (
        <S.Content>
            <S.InputContent>
                <S.Input
                    type="text"
                    placeholder='O que você procura ?'
                />
                <S.IoMdSearchIcon />
            </S.InputContent>

            <S.Title>NEXT <S.Imagem src={logo} alt='Imagem Logo' /> STORE</S.Title>

            <S.Login>Minha conta</S.Login>

            {/* talvez envolver com uma div para ter os numeros aqui */}
            <S.Icon><BsHandbag />0</S.Icon>
        </S.Content>
    )
}